// import { Product } from "../../type";
import { Link } from "react-router-dom";
import { PRODUCT } from "../../graphql/products";

const ProductItems = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt,
}: PRODUCT) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item_title">{title}</p>
        <img
          src={imageUrl}
          alt="API 더미이미지"
          className="product-item_image"
        />
        <span>${price}</span>
      </Link>
    </li>
  );
};

export default ProductItems;
