import { Product } from "../../type";

const ProductItems = ({ category, image, price, rating, title }: Product) => {
  return (
    <li className="product-item">
      <p className="product-item_category">{category}</p>
      <p className="product-item_title">{title}</p>
      <img src={image} alt="API 더미이미지" className="product-item_image" />
      <span>${price}</span>
      <span className="product-item_rating">{rating.rate}</span>
    </li>
  );
};

export default ProductItems;
