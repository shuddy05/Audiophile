import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
const SuccessModal = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;
  const handleBackToHome = () => {
    clearCart();
    setShowSuccessModal(false);
    navigate("/");
  };
  <section>
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-[540px]  w-full p-8 md:p-12">
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-2xl md:text-[32px] font-bold mb-4 ">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>

        <p className="text-black/50 text-[15px] mb-6">
          You will receive an email confirmation shortly.
        </p>

        <div className="mb-8 rounded-lg overflow-hidden">
          <div className="bg-[#F1F1F1] p-6">
            {cartItems.length > 0 && (
              <div className="flex items-center gap-4 pb-3 border-b border-black/10">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <img
                    src={cartItems[0].image}
                    alt={cartItems[0].name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="">
                  <h4 className="font-bold text-[15px]">{cartItems[0].name}</h4>
                  <p className="text-black/50 text-sm">
                    $ {cartItems[0].price?.toLocaleString()}
                  </p>
                </div>
                <span className="text-black/50 font-bold text-[15px]">
                  x{cartItems[0].quantity}
                </span>
              </div>
            )}

            {cartItems.length > 1 && (
              <p className="text-black/50 text-xs text-center pt-3">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>

          <div className="bg-black p-6">
            <p className="text-white/50 text-[15px] mb-2">GRAND TOTAL</p>
            <p className="text-white text-lg font-bold">
              $ {grandTotal.toLocaleString()}
            </p>
          </div>
        </div>
        <button
          onClick={handleBackToHome}
          className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 font-bold text-[13px] tracking-wider transition-colors"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  </section>;
};

export default SuccessModal;
