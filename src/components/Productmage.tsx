import React, { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = (props: ProductImageProps) => {
  const { img = '', className, style } = props;
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      style={style}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
    />
  );
};
