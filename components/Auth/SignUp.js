import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { setCookie } from "nookies";

import getGQLError from "../../utils/getGQLError";

import s from "../../styles/auth.module.scss";
import { AuthContext } from "../../context/authContext";

const SIGNUP = gql`
  mutation SignUp($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {_, setSignedIn}  = useContext(AuthContext)
  const router = useRouter();
  const [signUp] = useMutation(SIGNUP, {
    onCompleted(data) {
      setCookie(null, "AuthCookie", data.register.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setSignedIn(true)
      router.push("/");
    },
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await signUp({
        variables: {
          input: {
            username: `${userName}`,
            email: `${email}`,
            password: `${password}`,
          },
        },
      });
    } catch (error) {
      console.log(getGQLError(error));
    }
  };

  return (
    <form className={s.signUpForm} onSubmit={submitForm}>
      <h1> Sign Up</h1>
      <label htmlFor="userName">User Name</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
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
      <label htmlFor="cofirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <input type="submit" value="Sign Up" />

      <div className={s.signInInstead}>
        <p>Already have an Account?</p>
        <Link href="/auth?q=signin">
          <a>Sign In</a>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
