import "../styles/globals.scss";

import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";

import client from "../lib/apollo-client";
import Layout from "../components/Layout";
import { AuthContext } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    const authCookie = parseCookies().AuthCookie;
    if (authCookie) setSignedIn(true);
    // router.push("/videoLecture");
  }, []);

  if (Component.getLayout) {
    return (
      <ApolloProvider client={client}>
        <AuthContext.Provider value={{ signedIn, setSignedIn }}>
          {Component.getLayout(<Component {...pageProps} />)}
        </AuthContext.Provider>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ signedIn, setSignedIn }}>
        <Layout
          signedIn={signedIn}
          runSignOut={() => (
            destroyCookie(null, "AuthCookie"), setSignedIn(false)
          )}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
