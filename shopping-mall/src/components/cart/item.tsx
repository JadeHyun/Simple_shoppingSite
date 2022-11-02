import { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { CartType, UPDATE_CART } from "../../graphql/cart";
import { graphqlFetcher } from "../../queryClient";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount })
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
  };

  return (
    <li className="cart-item">
      <img src={imageUrl} alt="더미데이터 이미지" />
      <p className="cart-item_price"> {price}</p>
      <p className="cart-item_title"> {title}</p>
      <input
        type="number"
        className="cart-item_amount"
        value={amount}
        onChange={handleUpdateAmount}
      />
    </li>
  );
};

export default CartItem;
