import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/audiophile.png";
import { IoMdCart } from "react-icons/io";
import { Facebook, Twitter, Instagram } from "lucide-react";
const Globalcard = () => {
  return (
    <main className="">
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
              <Facebook className="w-[23px] h-[20px] " />
              <Twitter className="w-[23px] h-[20px] " />
              <Instagram className="w-[23px] h-[20px] " />
            </div>
          </div>
          <p className="font-bold text-[15px] text-white/50 text-center md:text-start ">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className=" md:hidden flex items-center justify-center mt-[40px] gap-3">
            <Facebook className="w-[23px] h-[20px] " />
            <Twitter className="w-[23px] h-[20px] " />
            <Instagram className="w-[23px] h-[20px] " />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Globalcard;
