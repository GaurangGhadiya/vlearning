import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import s from "../../styles/MiddleSection.module.scss";

import SearchWidget from "./SearchWidget";
const MiddleSection = ({ signedIn, runSignOut }) => {
  const { cartHidden, setCartHidden } = useContext(CartContext);
  return (
    <div className={s.sec2}>
      <div className={s.logo}>
        <Image src="/logoFull.svg" alt="logo" width={153} height={40} />
      </div>
      <SearchWidget />
      {signedIn ? (
        <>
          <div className={s.profile}>
            <FaUserCircle size={22} />
            <ul className={s.userMenu}>
              <li>
                <a href="#">Profile</a>{" "}
              </li>
              <li>
                <a href="#">Orders</a>{" "}
              </li>
              <li>
                <button onClick={runSignOut}>SignOut</button>{" "}
              </li>
            </ul>
          </div>
          <div className={s.cart} onClick={() => setCartHidden(!cartHidden)}>
            <FaShoppingCart size={22} />
          </div>
        </>
      ) : (
        <>
          <Link href="/auth?q=signup">
            <a className={s.signupButton}> SignUp</a>
          </Link>
          <Link href="/auth?q=signin">
            <a className={s.loginButton}>Login</a>
          </Link>
        </>
      )}

      {/* <div>
        <a href="https://admin-vlearning.herokuapp.com/admin">Admin Login</a>
      </div> */}
    </div>
  );
};

export default MiddleSection;
