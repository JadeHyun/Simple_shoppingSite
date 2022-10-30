// import { Product } from "../../type";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Product } from "../../graphql/products";
import { cartItemSelector } from "../../recoils/cart";

const ProductItems = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt,
}: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount((prev) => (prev || 0) + 1);
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
      <button className="product_item_add-cart" onClick={addToCart}>
        담기
      </button>
      <span>{cartAmount || 0}</span>
    </li>
  );
};

export default ProductItems;
