import React, { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ProductButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = (props: ProductButtonsProps) => {
  const { className, style } = props;

  // TODO: maxCount

  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => {
    if (counter === maxCount) return true;
    return false;
  }, [counter, maxCount]);

  // TODO: isMaxReached = useCallback [counter, maxCount]
  // True si el count == maxCount
  // False si no lo es

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        onClick={() => increaseBy(-1)}
        className={`${styles.buttonMinus}`}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached()}
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ''
        }`}
      >
        +
      </button>
    </div>
  );
};
