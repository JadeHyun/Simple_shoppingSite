import { CartType } from "../../graphql/cart";

const ItemData = ({
  imageUrl,
  price,
  title,
}: Pick<CartType, "imageUrl" | "price" | "title">) => {
  return (
    <>
      <img className="cart-item_image" src={imageUrl} alt="더미데이터 이미지" />
      <p className="cart-item_price"> {price}</p>
      <p className="cart-item_title"> {title}</p>
    </>
  );
};

export default ItemData;
