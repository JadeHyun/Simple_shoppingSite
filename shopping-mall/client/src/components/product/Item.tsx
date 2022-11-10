// import { Product } from "../../type";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";

const ProductItems = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt,
}: Product) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );
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
      <button className="product_item_add-cart" onClick={() => addCart(id)}>
        담기
      </button>
    </li>
  );
};

export default ProductItems;
