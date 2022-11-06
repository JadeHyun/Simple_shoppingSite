import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import ItemData from "./itemData";

const WillPay = () => {
  const navigate = useNavigate();
  const checkItems = useRecoilValue(checkedCartState);
  const totalPrice = checkItems.reduce((res, { price, amount }) => {
    res += price * amount;
    return res;
  }, 0);

  const handleSubmit = () => {
    if (checkItems.length) {
      navigate(`/payment`);
    } else {
      alert("결제 불가 !!");
    }
  };

  return (
    <div className="cart-willpay">
      <ul>
        {checkItems.map(({ imageUrl, price, title, id, amount }) => (
          <li>
            <ItemData
              imageUrl={imageUrl}
              price={price}
              title={title}
              key={id}
            />
            <p>수량 : {amount}</p>
            <p>금액 : {price * amount}</p>
          </li>
        ))}
      </ul>
      <p>총예상 결제액{totalPrice}</p>
      <button onClick={handleSubmit}>결제하기</button>
    </div>
  );
};

export default WillPay;
