import s from "../../styles/Footer.module.scss";
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

const footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.contentArea}>
        <div className={s.logoSection}>
          <Image
            src="/images/VLearningWhite.svg"
            width={200}
            height={53}
            alt="vlearing White"
          />
          <p className={s.imageCaption}>Get The Edge you Need.</p>
        </div>
        <div className={s.otherLinks}>
          <h2>OTHER LINKS</h2>
          <a href="https://admin-vlearning.herokuapp.com/admin">Admin Login</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">About Us</a>
          <a href="#">Condition of Use</a>
        </div>
        <div className={s.joinUs}>
          <h2>JOIN US</h2>
          <div className={s.socials}>
            <a href="#">
              <FaTelegram size={24} />
            </a>
            <a href="#">
              <FaWhatsapp size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className={s.getInTouch}>
          <h2>GET IN TOUCH</h2>
          <p>contact@vvlearnings.com</p>
          <p>+91 6397377811</p>
          <p>
            123 5th Ave, Chandrapur, <br></br>Maharashtra 10021
          </p>
        </div>
        <div className={s.copyright}>
          copyright © 2021 VLearning - All Rights Reserved (Powered By
          BrownHostTech)
        </div>
        <div className={s.devContact}>Contact Designer and Developer</div>
      </div>
    </footer>
  );
};

export default footer;
