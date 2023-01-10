import React from "react";
import Hero from "../../components/hero/Hero";
import News from "./sections/News";
import Main from "./sections/Main";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Hero />
      <News />
      <Main />
    </div>
  );
};

export default Home;
