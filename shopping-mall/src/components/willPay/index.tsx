import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { SyntheticEvent } from "react";

import { checkedCartState } from "../../recoils/cart";
import ItemData from "../cart/itemData";

const WillPay = ({
  submitTitle,
  handleSubmit,
}: {
  submitTitle: string;
  handleSubmit: (e: SyntheticEvent) => void;
}) => {
  const navigate = useNavigate();
  const checkItems = useRecoilValue(checkedCartState);
  const totalPrice = checkItems.reduce((res, { price, amount }) => {
    res += price * amount;
    return res;
  }, 0);

  return (
    <div className="cart-willpay">
      <ul>
        {checkItems.map(({ imageUrl, price, title, id, amount }) => (
          <li key={id}>
            <ItemData
              imageUrl={imageUrl}
              price={price}
              title={title}
              key={id}
            />
            <p>
              price : {price} amount : {amount}
            </p>
            <p>수량 : {amount}</p>
            <p>금액 : {price * amount}</p>
          </li>
        ))}
      </ul>
      <p>총예상 결제액{totalPrice}</p>
      <button onClick={handleSubmit}>{submitTitle}</button>
    </div>
  );
};

export default WillPay;
