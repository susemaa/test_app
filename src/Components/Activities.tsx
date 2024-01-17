import React from 'react';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import type { Activity } from '../types';

type ActivitiesProps = {
  activities: Activity[];
  existingCoins: { [key: string]: JSX.Element };
};

export default function Activities({ activities, existingCoins }: ActivitiesProps) {
  const getMonth = (date: Date) => new Date(date).toLocaleDateString('en-GB', { month: 'long' });

  return (
    <div>
      {activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((activity, idx) => {
        const { date, coin, type, address } = activity;
        const { amount, name } = coin;

        return (
          <div key={date.toString()}>
            <div className={(idx === 0) || (getMonth(activities[idx - 1].date) !== getMonth(date)) ? "pb-4" : ""}>
              {idx === 0 && getMonth(date)}
              {idx > 0 && getMonth(activities[idx - 1].date) !== getMonth(date) && getMonth(date)}
            </div>
            <div className="coin-container">
              <div className="coin-info">
                <div className="relative">
                  {existingCoins[name] || existingCoins.BTC}
                  <div className="absolute bottom-0 right-0 w-5 h-5 text-white p-0.5">
                    {type === 'deposit' ? <ArrowDownCircleIcon className="rounded-full bg-green-500"/> : <ArrowUpCircleIcon className="rounded-full bg-yellow-500"/>}
                  </div>
                </div>
                <div className="coin-details">
                  <div className="coin-amount left-align">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                  <div className="coin-chain coin-detail-text whitespace-nowrap">
                    {type === 'deposit' ? 'from ' : 'to '}
                    {address.length > 15 ? `${address.slice(0, 5)}...${address.slice(-4)}`: address}
                  </div>
                </div>
              </div>
              <div className="coin-info">
                <div className="coin-details-end">
                  <div className="coin-amount-small right-align whitespace-nowrap">
                    <div className={type === 'deposit' ? 'text-green-500' : ''}>
                      {type === 'withdraw' ? `-${amount.toLocaleString('en-US')} ` : `+${amount.toLocaleString('en-US')} `}
                      {name}
                    </div>
                  </div>
                  <div className="coin-amount-small right-align whitespace-nowrap coin-detail-text">
                    {new Date(date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      hour12: false,
                      hour: '2-digit',
                      minute: '2-digit'
                    }).replace(',', '')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
