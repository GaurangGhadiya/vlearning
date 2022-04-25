import Input from "../Input/Input";
import { useState } from "react";
import * as S from "./InfoSection.styles";
import { IoClose } from "react-icons/io";

const InfoSection = ({ className }) => {
  const [couponCode, setCouponCode] = useState("");

  return (
    <S.InfoSection className={className}>
      {/* products section  */}
      <S.Products>
        <div className="product">
          <div className="image">
            <p>Image</p>
          </div>
          <h5>CA Foundation Mathematics, logical Reasoning, Accounts</h5>
          <p className="description">USB & Soft Copy</p>
          <button className="deleteProduct">+ 
          </button>
          <p className="productPrice">Rs 69.00</p>
        </div>
        <div className="product">
          <div className="image">
            <p>Image</p>
          </div>
          <h5>CA Foundation Mathematics, logical Reasoning, Accounts</h5>
          <p className="description">USB & Soft Copy</p>
          <p className="productPrice">Rs 69.00</p>
        </div>
      </S.Products>
      {/* coupon Section */}
      <S.Coupon>
        <Input name="Coupon Code" value={couponCode} setValue={setCouponCode} />
        <button>Apply</button>
      </S.Coupon>
      {/* billBreakdown section */}
      <S.BillBreakDown>
        <p>Subtotal</p>
        <p>INR Rs 138</p>
        <p>shipping</p>
        <p>Free</p>
        <p>Wallet</p>
        <p> -23 Rs</p>
      </S.BillBreakDown>
      {/* total Section */}
      <S.Total>
        <p>Total</p>
        <p>INR Rs 138</p>
      </S.Total>
    </S.InfoSection>
  );
};

export default InfoSection;
