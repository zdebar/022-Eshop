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

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

