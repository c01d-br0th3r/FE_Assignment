import React, { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

const globalStyle = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
#__next {
  height: 100%;
}
.loading {
    position: relative;
    width: 60px;
    height: 20px;
  }
  
  .dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #232323;
    animation: load 1.5s linear infinite;
  }
  
  .dot:nth-child(1) {
    left: -20px;
    animation-delay: -0.1s;
  }
  
  .dot:nth-child(3) {
    left: 20px;
    animation-delay: 0.1s;
  }
  
  @keyframes load {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    70% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(0);
    }
  } 
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Hello, OKKOT</title>
        <style>{globalStyle}</style>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
