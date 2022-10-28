import { Product } from "../../type";
import { Link } from "react-router-dom";

const ProductItems = ({
  category,
  image,
  price,
  rating,
  title,
  id,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item_category">{category}</p>
        <p className="product-item_title">{title}</p>
        <img src={image} alt="API 더미이미지" className="product-item_image" />
        <span>${price}</span>
        <span className="product-item_rating">{rating.rate}</span>
      </Link>
    </li>
  );
};

export default ProductItems;
