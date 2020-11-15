import React, { ReactNode } from "react";
import TopSection from "./TopSection";
import Head from "next/head";
import About from './AboutMe';
import Contact from './ContactMe';
import Portfolio from './Portfolio';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Noruzi | Front End Developer",
}: Props) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <TopSection />
        <About/>
        <Portfolio/>
        <Contact/>
      </header>
      {children}
    </div>
  );
};

export default Layout;
