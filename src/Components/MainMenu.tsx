import { useState } from 'react';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import type { Data } from '@/src/types';
import Tokens from '@/src/Components/Tokens';
import Activities from '@/src/Components/Activities';

type Props = {
  data: Data,
}

type TabName = 'tokens' | 'activity';

type ExistingCoins = {
  [key: string]: JSX.Element;
};

const existingCoins: ExistingCoins = {
  'TON': (<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="coin-icon svg-back"><path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#0098EA"/><path d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z" fill="white"/></svg>),
  'USDT': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" className="coin-icon svg-back"><path d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0" fill="#53ae94"/><path d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18" fill="#fff"/></svg>),
  'BTC': (<svg className="coin-icon svg-back" viewBox="0.004 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#ffffff"/></svg>),
}

export default function MainMenu({ data }: Props) {
  const [activeTab, setTab] = useState<TabName>('tokens');

  const handleTabChange = (type: TabName) => () => {
    setTab(type);
  }

  const handleButtons = (msg: string) => () => {
    alert(msg);
  }

  const { wallet, coins, activities } = data;
  const sum = coins.reduce((acc, c) => (acc + c.amount * c.value), 0);

  return(
    <div className="container bg-gradient-to-t from-blue-300 to-white-500">
      {/* Wallet */}
      <div className="wallet-value flex-center aligned">
        <span className="main-text">${Math.trunc(sum).toLocaleString('en-US')}</span>
        <span className="sub-text ">.{(sum - Math.floor(sum)).toFixed(2).toString().split('.')[1]}</span>
      </div>
      <div className="wallet-key wallet-style flex-center">{`${wallet.slice(0, 5)}...${wallet.slice(-4)}`}</div>

      <div className="inner-container">
        {/* Buttons */}
        <div className="buttons-container">
          <button
            type="button"
            className="button flex-center button-main"
            onClick={handleButtons('Deposit')}
          >
            <ArrowUpCircleIcon className="button-icon"/>
            Deposit
          </button>
          <button
            type="button"
            className="button flex-center button-sub"
            onClick={handleButtons('Send')}
          >
            <ArrowDownCircleIcon className="button-icon"/>
            Send
          </button>
          <button
            type="button"
            className="button-small flex-center button-sub"
            onClick={handleButtons('Buy')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-1">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="blue-600" />
              <path className="text-white" fillRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            Buy
          </button>
        </div>

        <button
          type="button"
          className="button-big flex-center button-main"
          onClick={handleButtons('Buy DFC')}
        >
          <ArrowUpCircleIcon className="button-icon"/>
          Buy DFC
        </button>

        {/* Navbar */}
        <div className="navbar skeleton flex-center">
          <button
            type="button"
            className={activeTab === 'tokens' ? `active-tab nav-button` : `nav-button`}
            onClick={handleTabChange('tokens')}
          >
            Tokens
          </button>
          <button
            type="button"
            className={activeTab === 'activity' ? `active-tab nav-button` : `nav-button`}
            onClick={handleTabChange('activity')}
          >
            Activity
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === 'tokens' && <Tokens coins={coins} existingCoins={existingCoins} />}
          {activeTab === 'activity' && <Activities activities={activities} existingCoins={existingCoins} />}
        </div>
      </div>
    </div>
  )
}
