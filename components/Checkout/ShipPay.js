import s from '../../styles/Checkout/ShipPay.module.scss'
import { FaAngleLeft, FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const ShipPay = () => {
  return (
    <div className={s.shipPaySection}>
      {/* logo Section */}
      <div className={s.logo}>
        <Image src="/logoFull.svg" alt="logo" width={153} height={40} />
      </div>

      {/* conteact Info Section */}
      <div className={s.contactInfo}>
        <h3>Contact Information</h3>
        <div className={s.userIcon}>
          <FaUserCircle size={70} color="#C8C8C8" />
        </div>
        <p className={s.email}>astroaniket1@gmail.com</p>
        <p className={s.phone}>+91 6397377811</p>
      </div>

      {/* shippingAddress Form Section */}
      <div className={s.shippingAddress}>
        <h3>Shipping Address</h3>
        <div className={s.addressForm}>
          <div className={[s.inputDiv, s.firstName].join(" ")}>
            <input type="text" id="firstName" placeholder="First Name" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className={[s.inputDiv, s.lastName].join(" ")}>
            <input type="text" id="lastName" placeholder="Last Name" />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className={s.inputDiv}>
            <input type="text" id="address" placeholder="Address" />
            <label htmlFor="address">Address</label>
          </div>
          <div className={s.inputDiv}>
            <input
              type="text"
              id="addressLine2"
              placeholder="Apartment, suit, etc. (optional)"
            />
            <label htmlFor="addressLine2">
              Apartment, suit, etc. (optional)
            </label>
          </div>
          <div className={s.inputDiv}>
            <input type="text" id="city" placeholder="City" />
            <label htmlFor="city">City</label>
          </div>
          <div className={[s.inputDiv, s.state].join(" ")}>
            <label htmlFor="state">State</label>
            <select name="state" id="state" className="form-control">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className={[s.inputDiv, s.pinCode].join(" ")}>
            <input type="text" id="pinCode" placeholder="PIN Code" />
            <label htmlFor="pinCode">PIN Code</label>
          </div>
          <div className={s.inputDiv}>
            <input type="text" id="phone" placeholder="Phone" />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <button className={s.blackButton}>Continue to Shipping</button>
      </div> 

    </div>
  );
};

export default ShipPay;
