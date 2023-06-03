# JM-Product-Card

Este es un paquete de preubas de despliegue en NPM

### Jhoam Molina

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';


```

```

      <ProductCard
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>

```
