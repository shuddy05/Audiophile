import React from "react";
import { useState } from "react";
import { useCart } from "../CartContext";

const ProductCard3 = ({ category, image, title, description, price, id }) => {
  // Add id prop
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Create product object from props
    const product = {
      id: id, // Make sure you pass id as a prop
      name: title,
      description: description,
      price: price,
      image: image,
      category: category,
    };

    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center text-black gap-[32px] text-black ">
      <div className="bg-[#F1F1F1] rounded-[8px] w-full lg:max-w-[540px] lg:max-h-[560px] flex items-center justify-center p-[40px] ">
        <img src={image} alt="" />
      </div>
      <div className="flex-1 max-w-[445px] text-left">
        {category && (
          <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-[24px]">
            {category}
          </p>
        )}
        <h1 className="text-[28px] md:text-[40px] font-bold mb-[32px] leading-tight">
          {title}
        </h1>
        <p className="text-black/50 text-[15px] leading-[25px] mb-[32px]">
          {description}
        </p>
        <div className="text-[18px] font-bold mb-[47px]">${price}</div>
        <div className="flex gap-[16px]">
          <div className="flex items-center bg-[#F1F1F1]">
            <button
              onClick={handleDecrease}
              className="px-4 py-4 cursor-pointer text-black/50 hover:text-[#D87D4A] font-bold transition-colors"
            >
              -
            </button>
            <span className="px-4 py-4 font-bold text-[13px]">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-4 py-4 text-black/50 cursor-pointer hover:text-[#D87D4A] font-bold transition-colors"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`text-[13px] cursor-pointer px-8 py-3 transition-colors ${
              added
                ? "bg-green-500 text-white"
                : "bg-[#D87D4A] hover:bg-[#FBAF85] text-white"
            }`}
          >
            {added ? "✓ ADDED TO CART" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard3;
