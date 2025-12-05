import React from "react";
import { useState } from "react";
import { useCart } from "../CartContext";

const ProductCard3 = ({ category, image, title, description, price }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // const handleAddToCart = () => {
  //   console.log(`Added ${quantity} x ${title} to cart`);
  //   alert(`Added ${quantity} x ${title} to cart`);
  // };

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center text-black gap-[32px]  text-black  ">
      <div className="bg-[#F1F1F1] rounded-[8px] w-full lg:max-w-[540px] lg:max-h-[560px]  flex items-center justify-center p-[40px] ">
        <img src={image} alt="" />
      </div>
      <div className="  flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-[24px] md:px-[98px] lg:py-[100px] lg:px-[120x]   ">
        <h1 className="text-[14px] tracking-[10px] leading-[100%] text-[#D87D4A] ">
          {category}
        </h1>
        <h1 className="text-[36px] font-bold md:text-[40px] leading-[58px] tracking-[2px] ">
          {title}
        </h1>
        <p className="  mx-auto lg:mx-0 text-[15px] leading-[25px] tracking-0 text-black/50  ">
          {description}
        </p>
        <p className="font-bold text-[18px] ">{price}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#F1F1F1]">
            <button
              onClick={handleDecrease}
              className="px-4 py-4 cursor-pointer text-black/50 hover:text-[#D87D4A] font-bold transition-colors"
            >
              -
            </button>
            <span className="px-6 py-4 font-bold text-[13px] tracking-[1px]">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="px-4 py-4 text-black/50 cursor-pointer hover:text-[#D87D4A] font-bold transition-colors"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-[13px] cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-3"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard3;
