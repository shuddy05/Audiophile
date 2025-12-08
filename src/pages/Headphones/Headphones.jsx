import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductCard2 from "../../components/ProductCard2";
import { headphone } from "../../utils/product";
import List from "../../components/List";
import { useEffect } from "react";
import Audiogear from "../../components/Audiogear";
const Headphones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="bg-black  ">
        <div className="layout mb-15  ">
          <h1 className=" py-9  text-[28px] md:text-[41px] text-center text-white font-bold ">
            HEADPHONES
          </h1>
        </div>
      </section>
      <section className="layout">
        <div>
          {headphone[0].map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
        <div>
          {headphone[1].map((item) => {
            return <ProductCard2 key={item.id} {...item} />;
          })}
        </div>
        <div>
          {headphone[2].map((item) => {
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

export default Headphones;
