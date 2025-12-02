import React from "react";

const Feature = ({ feature }) => {
  return (
    <div>
      <h1 className="text-[24px] md:text-[30px] font-bold ">FEATURES</h1>
      <p className=" text-[15px] leading-[25px] text-black/50 "> {feature} </p>
    </div>
  );
};

export default Feature;
