import Image from "next/image";
import { useRouter } from "next/router";

import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

import s from "../styles/auth.module.scss";
import coverImage from "../public/images/bookBackground.jpg";
import whiteLogo from "../public/images/VLearningWhite.svg";

const Auth = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      {/* background image  */}
      <div className={s.imageContainer}>
        <Image
          src={coverImage}
          layout="fill"
          objectFit="cover"
          alt="books Image"
        />
      </div>
      {/* left Side logo */}
      <div className={s.logo}>
        <Image src={whiteLogo} width={180} height={50} alt="Vlearning" />
        <h3>Sign in or create an account.</h3>
      </div>
      {/* right side form  */}

      {router.query.q == "signup" ? <SignUp /> : <SignIn />}
    </div>
  );
};

Auth.getLayout = (page) => page;

export default Auth;
