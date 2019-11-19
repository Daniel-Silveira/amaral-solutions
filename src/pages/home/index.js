import React, { useLayoutEffect, useState } from "react";
import { StyledHome } from "./styled";
import Header from "../../components/header";
import Services from "../../components/services";
import About from "../../components/about";
import Contact from "../../components/contact";
import Navbar from "../../components/navbar";

const Home = () => {
  const [scroll, setScroll] = useState("");
  const [step1, setStep1] = useState(false);
  let number = 0;
  useLayoutEffect(() => {
    window.onscroll = () => setScroll(window.pageYOffset);
    // window.scrollTo(0, 1000);
  }, []);
  //   const scrollAnimation = setInterval(() => {
  //     scroll >= 80 && number < 750 && (number = number + 1);
  //     number === 750 && clearInterval(scrollAnimation);
  //   }, 10);
  return (
    <StyledHome>
      <Navbar scroll={scroll} />
      <Header />
      <Services scroll={scroll} />
      <About />
      <Contact />
    </StyledHome>
  );
};

export default Home;
