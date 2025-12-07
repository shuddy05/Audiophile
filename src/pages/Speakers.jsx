import React from "react";
import ProductCard from "../components/ProductCard";
import { speaker } from "../utils/product";
import List from "../components/List";
import ProductCard2 from "../components/ProductCard2";
import Audiogear from "../components/Audiogear";
const Speakers = () => {
  return (
    <main>
      <section className="bg-black  ">
        <div className="layout mb-15  ">
          <h1 className=" py-9  text-[28px] md:text-[41px] text-center text-white font-bold ">
            SPEAKERS
          </h1>
        </div>
      </section>
      <section className="layout text-black ">
        <div>
          {speaker[0].map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
        <div>
          {speaker[1].map((item) => {
            return <ProductCard2 key={item.id} {...item} />;
          })}
        </div>
      </section>
      <div>
        <List />
      </div>
      <Audiogear />
    </main>
  );
};

export default Speakers;
