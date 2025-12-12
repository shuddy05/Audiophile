import HeroSection from "./HeroSection";
import List from "../../components/List";
import ProductDisplay from "./ProductDisplay";
import Audiogear from "../../components/Audiogear";

import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <HeroSection />
      <section>
        <div className="layout mb-[80px] mt-[160px] ">
          <List />
        </div>
      </section>
      <section className="layout">
        <ProductDisplay />
      </section>
      <Audiogear />
    </main>
  );
};

export default Home;
