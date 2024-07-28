import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
    <Link to={`/product/${product.id}`}><img src={product.thumbnail} /></Link>
    {product.title}
      <div className="rating">{product.rating} ★</div>
     
      <p>${product.price}</p>
    </div>
  );
};
