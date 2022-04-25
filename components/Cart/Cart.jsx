import * as S from "./Cart.style";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = ({ hidden, setHidden }) => {
  return (
    <S.Cart hidden={hidden}>
      <S.CartHead>
        <span>Cart</span>
        {/* <div className="closeIcon"> */}
        <button onClick={() => setHidden(!hidden)}>
          <AiFillCloseCircle size={28} className="closeIcon" />
        </button>

        {/* </div>         */}
      </S.CartHead>
      <S.CartInfoSection />
      <S.CheckoutButton>Check out</S.CheckoutButton>
    </S.Cart>
  );
};

export default Cart;
