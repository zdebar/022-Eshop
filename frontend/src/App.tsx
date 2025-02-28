import { useState } from 'react';
import ProductCard from './components/ProductCard';
import productsData from './data/products.json';

function App() {
  const [products] = useState(productsData); // Using useState to store products data

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

export default App;

