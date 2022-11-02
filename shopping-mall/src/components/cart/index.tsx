import { CartType } from "../../graphql/cart";
import CartItem from "./CartItem";

const CartList = ({ items }: { items: CartType[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;
