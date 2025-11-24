import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import logo from "../assets/audiophile.png";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="bg-black">
      <nav className="layout  text-white flex justify-between items-center border-b-1 border-b-white ">
        <NavLink to="/">
          <img src={logo} alt="audiophileLogo" />
        </NavLink>
        <div className="hidden lg:flex gap-[34px] text-[13px] font-bold ">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/headphone">HEADPHONES</NavLink>
          <NavLink to="/speaker">SPEAKERS</NavLink>
          <NavLink to="/earphone">EARPHONES</NavLink>
          <IoCloseSharp size={20} />
          <IoMenu size={20} />
        </div>
        <div>
          <IoMdCart className="w-[23px] h-[20px] " />
        </div>
      </nav>
      <nav></nav>
    </header>
  );
};

export default Navbar;
