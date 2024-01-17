import React from 'react';
import type { Coin } from '../types';

type TokensProps = {
  coins: Coin[];
  existingCoins: { [key: string]: JSX.Element };
};

export default function Tokens({ coins, existingCoins }: TokensProps) {
  return (
    <>
      {coins.map((coin) => (
        <div key={coin.name} className="coin-container">
          <div className="coin-info">
            {existingCoins[coin.name] || existingCoins.BTC}
            <div className="coin-details">
              <div className="coin-amount left-align">{coin.amount.toLocaleString('en-US')} {coin.name}</div>
              <div className="coin-chain coin-detail-text">{coin.chain}</div>
            </div>
          </div>
          <div className="coin-info">
            <div className="coin-details-end">
              <div className="coin-amount-small right-align">${(coin.amount * coin.value).toLocaleString('en-US')}</div>
              <div className="coin-chain-small" />
            </div>
          </div>
        </div>
      ))}
    </>
  )
};
