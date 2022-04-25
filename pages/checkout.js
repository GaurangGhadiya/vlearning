import s from "../styles/Checkout/checkout.module.scss";
import ShipPay from "../components/Checkout/ShipPay";
import InfoSection from "../components/Checkout/InfoSection";

const checkout = () => {
  return (
    <div className={s.checkoutPage}>
      <ShipPay />
      <InfoSection />
    </div>
  );
};

checkout.getLayout = (page) => page;

export default checkout;
