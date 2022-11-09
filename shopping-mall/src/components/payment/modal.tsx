import { ReactChild } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: ReactChild }) => {
  return createPortal(children, document.getElementById("modal")!);
};

const PaymentModal = ({
  show,
  proceed,
  cancel,
}: {
  show: boolean;
  proceed: () => void;
  cancel: () => void;
}) => {
  return show ? (
    <ModalPortal>
      <div>
        <p>정말 결제할까요?</p>
        <div>
          <button onClick={proceed}>예</button>
          <button onClick={cancel}>아니요</button>
        </div>
      </div>
    </ModalPortal>
  ) : null;
};

export default PaymentModal;
