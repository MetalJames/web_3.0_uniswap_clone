import React, { useState, useEffect, useRef } from 'react';
import { chevronDown } from '../assets';
import styles from '../styles';
import { useAmountsOut, useOnClickOutside } from '../utils';
import { formatUnits } from 'ethers/lib/utils';

const AmountOut = ({ fromToken, toToken, amountIn, pairContract, currencyValue, onSelect, currencies }) => {
  const [showList, setShowList] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState('Select');
  const ref = useRef();

  const amountOut = useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0;

  useOnClickOutside(ref, () => setShowList(false))

  const resetAll = () => {
    setShowList(false);
    setActiveCurrency('Select');
  }

  useEffect(() => {
    let loggedin=true
    if(loggedin){
      if (Object.keys(currencies).includes(currencyValue)) {
        setActiveCurrency(currencies[currencyValue]);
      } else {
        setActiveCurrency('Select')
      }
      }
      return () => {
        resetAll()
    }
  }, [currencyValue, currencies]);

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder='0.0'
        type='number'
        value={formatUnits(amountOut)}
        disabled
        className={styles.amountInput}
      />

      <div className='relative' onClick={() => setShowList((prevState) => !prevState)}>
        <button className={styles.currencyButton}>
          {activeCurrency}
          <img
            src={chevronDown}
            alt='cheveron-down'
            className={`w-4 h-4 object-contain ml-2 ${
              showList ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {showList && (
          <ul ref={ref} className={styles.currencyList}>
            {Object.entries(currencies).map(([token, tokenName], index) => (
              <li
                key={index}
                className={`${styles.currencyListItem} ${
                  activeCurrency === tokenName ? 'bg-site-dim2' : ''
                } cursor-pointer`}
                onClick={() => {
                  if (typeof onSelect === 'function') onSelect(token);
                  setActiveCurrency(tokenName);
                  setShowList(false);
                }}
              >
                {tokenName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountOut;