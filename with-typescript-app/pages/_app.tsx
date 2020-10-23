// pages/_app.js
import React from "react";
import type { AppProps } from "next/app";
import "../styles/global/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
