import React from "react";
const Typography = ({ type, title, description }) => {
  return (
    <div className=" w-[300px] md:w-[398px]  flex flex-col  text-white ">
      <h1 className="text-[14px] tracking-[10px] leading-[100%] text-white/65 ">
        {type}
      </h1>
      <h1 className="text-[36px] font-bold lg:text-[56px] leading-[58px] tracking-[2px] ">
        {title}
      </h1>
      <p className=" mx-auto lg:mx-0 text-[15px] leading-[25px] w-[300px] md:w-[328px]  ">
        {description}
      </p>
    </div>
  );
};

export default Typography;
