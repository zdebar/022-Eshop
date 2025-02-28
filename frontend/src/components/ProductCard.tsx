import { useCart } from '../hooks/useCart';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string[];
  color: string[];
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

