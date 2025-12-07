import React, { useState } from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Audiogear from "../components/Audiogear";
const CartPage = ({ isOpen, onClose }) => {
  // const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    onClose();
    navigate("/checkout");
  };
  // const handleEmptyCart = async () => {
  //   onClose();
  //   navigate("/");
  // };

  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } =
    useCart();

  if (!isOpen) return null;

  return (
    <section>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed top-[100px] right-4 md:right-8 lg:right-[165px] w-[90%] md:w-[400px] bg-white rounded-lg shadow-2xl z-50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold tracking-wider">
            CART ({cartItems.reduce((count, item) => count + item.quantity, 0)})
          </h2>
          <button
            onClick={clearCart}
            className="text-black/50 hover:text-black underline text-sm"
          >
            Remove all
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8 text-black/50 flex flex-col gap-3 ">
            Your cart is empty
            {/* <button
              className=" cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] rounded-md text-white py-3 text-sm font-boldx"
              onClick={handleEmptyCart}
            >
              Add To Cart
            </button> */}
          </div>
        ) : (
          <section>
            <div className="space-y-6 max-h-[300px] overflow-y-auto mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#F1F1F1] rounded flex-shrink-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-sm">
                      {item.name
                        ?.replace(/headphones|wireless|earphones/)
                        .trim()}
                    </h3>
                    <p className="text-black/50 text-sm">
                      $ {item.price?.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center bg-[#F1F1F1] h-8">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 cursor-pointer h-full flex items-center justify-center text-black/50 hover:text-[#D87D4A] font-bold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-full cursor-pointer flex items-center justify-center text-black/50 hover:text-[#D87D4A] font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-black/50 uppercase text-sm">Total</span>
              <span className="font-bold text-lg">
                $ {getCartTotal().toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 text-sm font-bold "
            >
              CHECKOUT
            </button>
          </section>
        )}
      </div>
      <Audiogear />
    </section>
  );
};

export default CartPage;
