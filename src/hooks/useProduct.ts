import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

export interface useProductReturn {
  counter: number;
  increaseBy: (arg: number) => void;
  maxCount?: number;
}

export interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = (props: useProductArgs) => {
  const { onChange, product, value = 0, initialValues } = props;
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }

    setCounter(newValue);

    if (onChange) return onChange({ count: newValue, product });
    // onChange && onChangeonChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    reset,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
  };
};

export default useProduct;
