import React from "react";
import image from "../assets/Bitmap (4).png";
import { NavLink } from "react-router-dom";
import logo from "../assets/audiophile.png";
import { IoMdCart } from "react-icons/io";

const Globalcard = () => {
  return (
    <main className="">
      <section className=" layout flex flex-col-reverse lg:flex-row gap-[40px] lg:justify-between items-center my-[120px] ">
        <div className="w-full lg:w-[445px] h-[295px] text-center lg:text-start flex flex-col justify-center items-center gap-[32px]  px-5 md:px-[90px] lg:px-0  ">
          <h1 className="uppercase font-bold text-[28px] md:text-[40px]  ">
            Bringing you the <span className="text-[#D87D4A]">best </span> audio
            gear
          </h1>
          <p className="text-[15px] text-black/50 leading-6 ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          src={image}
          alt=""
          className="w-full lg:max-w-[540px] lg:max-h-[588px] rounded-[8px]  "
        />
      </section>
      <footer className=" bg-black   ">
        <div className="layout text-white py-[65px] px-[130px]">
          <nav className="layout mb-[35px]  text-white flex flex-col md:flex-row justify-between gap-[48px] items-center ">
            <NavLink to="/">
              <img src={logo} alt="audiophileLogo" />
            </NavLink>
            <div className="flex flex-col md:flex-row text-center gap-[34px] text-[13px] font-bold ">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/headphone">HEADPHONES</NavLink>
              <NavLink to="/speaker">SPEAKERS</NavLink>
              <NavLink to="/earphone">EARPHONES</NavLink>
            </div>
          </nav>
          <div className="mb-[56px] flex justify-between items-end text-center md:text-start ">
            <p className="text-white/50 w-[540px] h-[100px] ">
              {" "}
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className=" hidden md:flex items-center gap-3">
              <IoMdCart className="w-[23px] h-[20px] " />
              <IoMdCart className="w-[23px] h-[20px] " />
              <IoMdCart className="w-[23px] h-[20px] " />
            </div>
          </div>
          <p className="font-bold text-[15px] text-white/50 text-center md:text-start ">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className=" md:hidden flex items-center justify-center mt-[40px] gap-3">
            <IoMdCart className="w-[23px] h-[20px] " />
            <IoMdCart className="w-[23px] h-[20px] " />
            <IoMdCart className="w-[23px] h-[20px] " />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Globalcard;
