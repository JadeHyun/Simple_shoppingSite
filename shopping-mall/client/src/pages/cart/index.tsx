import { useQuery } from "react-query";
import { GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import CartList from "../../components/cart/index";
import { CartType } from "../../graphql/cart";

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    staleTime: 0,
    cacheTime: 1000,
  });
  const cartItem = Object.values(data || []) as CartType[];

  if (!cartItem.length) return <div>장바구니가 비었어요 !</div>;

  return <CartList items={cartItem} />;
};

export default Cart;
