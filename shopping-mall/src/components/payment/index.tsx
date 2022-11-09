import { useRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";

const Payment = () => {
  const [checkedCartDate, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const showModal = () => {
    return;
  };

  return <WillPay submitTitle="결제하기" handleSubmit={showModal} />;
};

export default Payment;
