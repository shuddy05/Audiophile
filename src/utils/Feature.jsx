import React from "react";

const Feature = ({ feature1, feature2 }) => {
  return (
    <div className="lg:w-[634px] ">
      <h1 className="text-[24px] md:text-[30px] font-bold ">FEATURES</h1>
      <p className=" text-[15px] leading-[25px] text-black/50 mb-10 ">
        {" "}
        {feature1}{" "}
      </p>
      <p className=" text-[15px] leading-[25px] text-black/50 "> {feature2} </p>
    </div>
  );
};

export default Feature;
