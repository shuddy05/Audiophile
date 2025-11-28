import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductCard2 from "../../components/ProductCard2";
import { headphone } from "../../utils/product";
import List from "../../components/List";
const Headphones = () => {
  console.log(headphone);

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
      </section>
        <div>
          <List />
        </div>
    </main>
  );
};

export default Headphones;
