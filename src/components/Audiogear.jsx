import React from "react";
import image from "../assets/Bitmap (4).png";

const Audiogear = () => {
  return (
    <section className=" layout flex flex-col-reverse lg:flex-row gap-[40px] lg:justify-between items-center my-[120px] ">
      <div className="w-full lg:w-[445px] h-[295px] text-center lg:text-start flex flex-col justify-center items-center gap-[32px]  px-5 md:px-[90px] lg:px-0  ">
        <h1 className="uppercase font-bold text-[28px] md:text-[40px]  ">
          Bringing you the <span className="text-[#D87D4A]">best </span> audio
          gear
        </h1>
        <p className="text-[15px] text-black/50 leading-6 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={image}
        alt=""
        className="w-full lg:max-w-[540px] lg:max-h-[588px] rounded-[8px]  "
      />
    </section>
  );
};

export default Audiogear;
