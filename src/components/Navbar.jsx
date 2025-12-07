import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import logo from "../assets/audiophile.png";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useCart } from "../CartContext";
import CartPage from "../pages/CartPage";

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false); // Add cart modal state

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const NavLinks = () => (
    <>
      <Link to="/">HOME</Link>
      <Link to="/headphone">HEADPHONES</Link>
      <Link to="/speaker">SPEAKERS</Link>
      <Link to="/earphone">EARPHONES</Link>
    </>
  );

  return (
    <>
      <header className="bg-black z-50">
        <nav className="hidden lg:flex justify-between items-center layout text-white border-b border-white/20">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="flex gap-8 text-[13px] font-bold tracking-wider">
            <NavLinks />
          </div>

          <div className="relative cursor-pointer" onClick={handleToggleCart}>
            <IoMdCart className="w-6 h-6 hover:text-orange-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </nav>

        <nav className="flex lg:hidden justify-between items-center layout text-white border-b border-white/20 sticky z-57">
          <button
            onClick={handleToggleMenu}
            className="z-50 hover:text-orange-400 transition-colors"
          >
            {showMenu ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
          </button>

          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>

          <div className="relative cursor-pointer" onClick={handleToggleCart}>
            <IoMdCart className="w-6 h-6 hover:text-orange-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <div
            className={`fixed left-0 top-0 w-full h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              showMenu ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={handleToggleMenu}
          />

          <div
            className={`fixed left-0 top-0 h-screen w-[280px] bg-black pt-20 px-8 flex flex-col gap-6 text-[15px] font-bold tracking-wider transition-transform duration-300 ease-in-out ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <NavLinks />
          </div>
        </nav>
      </header>

      <CartPage isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};

export default Navbar;
