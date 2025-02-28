import { useState } from 'react';
import ProductCard from './components/ProductCard';
import productsData from './data/products.json';

export default function App() {
  const [products] = useState(productsData); 

  return (
    <div className="app">
      <h1>My E-Shop</h1>
      <div className="product-list">
        {products.map(function (product) {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
