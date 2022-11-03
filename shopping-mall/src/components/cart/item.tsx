import { SyntheticEvent } from "react";
import { QueryClient, useMutation } from "react-query";
import { CartType, UPDATE_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(QueryKeys.CART);
        const prevCart = queryClient.getQueriesData<{
          [key: string]: CartType;
        }>(QueryKeys.CART);
        if (!prevCart?.[id]) return prevCart;

        const newCart = {
          ...(prevCart || {}),
          [id]: { ...prevCart[id], amount },
        };
        queryClient.setQueryData(QueryKeys.CART, newCart);
        return prevCart;
      },
      onSuccess: (newValue) => {
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>(
          QueryKeys.CART
        );
        const newCart = {
          ...(prevCart || {}),
          [id]: newValue,
        };
        queryClient.setQueriesData(QueryKeys.CART, newCart);
      },
    }
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
  };

  return (
    <li className="cart-item">
      <img className="cart-item_image" src={imageUrl} alt="더미데이터 이미지" />
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
