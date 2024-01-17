import React from 'react';

export default function SkeletonCoin () {
  return(
    <div className="coin-container">
      <div className="coin-info">
        <div className="coin-icon skeleton" />
        <div className="coin-details">
          <div className="coin-amount skeleton" />
          <div className="coin-chain skeleton" />
        </div>
      </div>
      <div className="coin-info">
        <div className="coin-details-end">
          <div className="coin-amount-small skeleton" />
          <div className="coin-chain-small skeleton" />
        </div>
      </div>
    </div>
  )
}