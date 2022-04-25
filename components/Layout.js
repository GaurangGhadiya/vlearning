import Head from "next/head";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CartContext } from "../context/cartContext";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cart from "../components/Cart/Cart";

import s from "../styles/Layout.module.scss";

const Layout = ({ children, signedIn, runSignOut }) => {
  const [cartHidden, setCartHidden] = useState(true);
  return (
    <>
      <Head>
        <title>Vlearning</title>
        <meta
          name="description"
          content="Vlearning the best CA video lecutres"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartContext.Provider value={{ cartHidden, setCartHidden }}>
        <Header signedIn={signedIn} runSignOut={runSignOut} />
        {children}
        <Cart hidden={cartHidden} setHidden={setCartHidden} />
      </CartContext.Provider>
      <div className={s.waButton}>
        <p>Get in touch</p>
        <FaWhatsapp size={32} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
