import React, { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
  /* children?: ReactElement | ReactElement[]; */
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = (props: Props) => {
  const {
    product,
    children,
    className,
    style,
    onChange,
    value,
    initialValues,
  } = props;

  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    initialValues,
    onChange,
    product,
    value,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
