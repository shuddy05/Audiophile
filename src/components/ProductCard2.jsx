import React from "react";
import { Link } from "react-router-dom";
const ProductCard2 = ({ category, id, image, title, description }) => {
  

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-black gap-[32px] mb-[120px] px-[24px] lg:px-[50px] text-black  ">
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
        <Link to={`/product/${id}`}>
          <button
            type="button"
            className="w-[160PX] h-[48px] p-3 cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] text-white  text-[13px] "
          >
            SEE PRODUCT
          </button>
        </Link>
      </div>
      <div className="bg-[#F1F1F1] rounded-[8px] w-full lg:max-w-[540px] lg:max-h-[560px]  flex items-center justify-center p-[40px] ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default ProductCard2;
