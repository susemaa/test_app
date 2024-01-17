import React from 'react';
import SkeletonCoin from '@/src/Components/SkeletonCoin';

export default function Skeleton () {
  return (
    <div className="container-skeleton">
      {/* Wallet */}
      <div className="wallet-value skeleton" />
      <div className="wallet-key skeleton" />

      <div className="inner-container">
        {/* Buttons */}
        <div className="buttons-container-skeleton">
          <div className="button skeleton" />
          <div className="button skeleton" />
          <div className="button-small skeleton" />
        </div>
        {/* Navbar */}
        <div className="navbar skeleton" />

        <div className="w-full mt-4">
          {/* Coins */}
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
          <SkeletonCoin />
        </div>
      </div>
    </div>
  )
}
