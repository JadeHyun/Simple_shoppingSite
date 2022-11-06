import { SyntheticEvent, forwardRef, ForwardedRef } from "react";
import { useMutation } from "react-query";
import { CartType, DELETE_CART, UPDATE_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import ItemData from "./itemData";

const CartItem = (
  { id, imageUrl, price, title, amount }: CartType,
  ref: ForwardedRef<HTMLInputElement>
) => {
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

  const { mutate: deleteCart } = useMutation(
    ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART);
      },
    }
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart({ id, amount });
  };

  const handleDeleteItem = () => {
    deleteCart({ id });
  };

  return (
    <li className="cart-item">
      <input
        className="cart-item_checkbox"
        type="checkbox"
        name={`select-item`}
        ref={ref}
      />
      <ItemData imageUrl={imageUrl} price={price} title={title} />
      <input
        type="number"
        className="cart-item_amount"
        value={amount}
        min={1}
        onChange={handleUpdateAmount}
      />
      <button
        className="cart-item_button"
        type="button"
        onClick={handleDeleteItem}
      >
        삭제
      </button>
    </li>
  );
};

export default forwardRef(CartItem);
