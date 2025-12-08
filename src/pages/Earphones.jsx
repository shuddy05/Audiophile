import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { earphone } from "../utils/product";
import List from "../components/List";
import Audiogear from "../components/Audiogear";
const Earphones = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <main>
      <section className="bg-black  ">
        <div className="layout mb-15  ">
          <h1 className=" py-9  text-[28px] md:text-[41px] text-center text-white font-bold ">
            EARPHONES
          </h1>
        </div>
      </section>
      <section className="layout">
        <div>
          {earphone.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
        <div>
          <List />
        </div>
      </section>
      <Audiogear />
    </main>
  );
};

export default Earphones;
