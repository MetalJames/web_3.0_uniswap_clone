// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { abis } from '@my-app/contracts';
import { ERC20, useContractFunction, useEthers, useTokenAllowance, useTokenBalance } from '@usedapp/core';
import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';

import { ROUTER_ADDRESS } from '../config';
// import { getAvailableTokens, getCounterpartTokens, findPoolByTokens, isOperationPending, getFailureMessage, getSuccessMessage } from '../utils';
// import AmountIn from './AmountIn';
// import AmountOut from './AmountOut';
// import Balance from './Balance';
// import styles from '../styles';

const Exchange = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='mb-8'>
                <AmountIn
                    value={fromValue}
                    onChange={onFromValueChange}
                    currencyValue={fromToken}
                    onSelect={onFromTokenChange}
                    currencies={availableTokens}
                    isSwapping={isSwapping && hasEnoughBalance}
                />
                <Balance tokenBalance={fromTokenBalance} />
            </div>

            <div className='mb-8 w-[100%]'>
                <AmountOut
                    fromToken={fromToken}
                    toToken={toToken}
                    amountIn={fromValueBigNumber}
                    pairContract={pairAddress}
                    currencyValue={toToken}
                    onSelect={onToTokenChange}
                    currencies={counterpartTokens}
                />
                <Balance tokenBalance={toTokenBalance} />
            </div>

            {approvedNeeded && !isSwapping ? (
                <button
                    disabled={!canApprove}
                    onClick={onApproveRequested}
                    className={`${
                        canApprove
                        ? 'bg-site-pink text-white'
                        : 'bg-site-dim2 text-site-dim2'
                    } ${styles.actionButton}`}
                    >
                    {isApproving ? 'Approving...' : 'Approve'}
                </button>
            ) : (
                <button
                    disabled={!canSwap}
                    onClick={onSwapRequested}
                    className={`${
                        canSwap ? 'bg-site-pink text-white' : 'bg-site-dim2 text-site-dim2'
                    } ${styles.actionButton}`}
                    >
                    {isSwapping
                        ? 'Swapping...'
                        : hasEnoughBalance
                        ? 'Swap'
                        : 'Insufficient balance'}
                </button>
            )}

            {failureMessage && !resetState ? (
                <p className={styles.message}>{failureMessage}</p>
            ) : successMessage ? (
                <p className={styles.message}>{successMessage}</p>
            ) : (
                ""
            )}
        </div>
    );
}

export default Exchange