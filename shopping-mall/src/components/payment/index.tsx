import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";
import PaymentModal from "./modal";

const Payment = () => {
  const navigate = useNavigate();
  const setCheckedCartData = useSetRecoilState(checkedCartState);
  const [modalShown, toggleModal] = useState(false);
  const showModal = () => {
    toggleModal(true);
  };

  const proceed = () => {
    //결제진행!

    setCheckedCartData([]);
    navigate("/products", { replace: true });
  };

  const cancel = () => {
    toggleModal(false);
  };

  return (
    <div>
      <WillPay submitTitle="결제하기" handleSubmit={showModal} />
      <PaymentModal show={modalShown} proceed={proceed} cancel={cancel} />
    </div>
  );
};

export default Payment;
