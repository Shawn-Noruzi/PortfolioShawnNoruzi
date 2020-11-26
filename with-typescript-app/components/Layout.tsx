import React, { ReactNode } from "react";
import TopSection from "./TopSection";
import useVisibility from "../utils/useVisibility";
import Head from "next/head";
import About from "./AboutMe";
import Contact from "./ContactMe";
import Portfolio from "./Portfolio";
import Footer from './Footer'

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({

  title = "Noruzi | Front End Developer",
}: Props) => {
  const [isFirstVisible, firstRef] = useVisibility<HTMLDivElement>(-100);
  const [isSecondVisible, secondRef] = useVisibility<HTMLDivElement>(100);
  const [isThirdVisible, thirdRef] = useVisibility<HTMLDivElement>(100);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <TopSection
          isFirstVisible={isFirstVisible}
          isSecondVisible={isSecondVisible}
          isThirdVisible={isThirdVisible}
        />
      </div>

      <div ref={firstRef}>
        <About />
      </div>
      <div ref={secondRef}>
        <Portfolio/>
      </div>
      <div ref={thirdRef}>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
