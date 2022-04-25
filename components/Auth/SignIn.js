import s from "../../styles/auth.module.scss";
import Link from "next/link";

import { gql, useMutation } from "@apollo/client";
import { useState, useContext } from "react";
import getGQLError from "../../utils/getGQLError";
import { useRouter } from "next/router";

import { setCookie } from "nookies";
import { AuthContext } from "../../context/authContext";

const SIGNIN = gql`
  mutation SignIn($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        id
      }
    }
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signedIn, setSignedIn } = useContext(AuthContext) 
  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    try {
      await signIn({
        variables: {
          input: {
            identifier: `${email}`,
            password: `${password}`,
            provider: "local",
          },
        },
      });
    } catch (error) {
      console.log(getGQLError(error));
    }
  };

  const [signIn] = useMutation(SIGNIN, {
    onCompleted(data) {
      console.log(data);
      setCookie(null, "AuthCookie", data.login.jwt);
      setSignedIn(true)
      router.push("/");
    },
  });
  return (
    <>
      <form className={s.signInForm} onSubmit={submitForm}>
        <h1> Sign In</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Sign In" />

        <div className={s.signUpInstead}>
          <p>New User?</p>
          <Link href="/auth?q=signup">
            <a>Create an account</a>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
