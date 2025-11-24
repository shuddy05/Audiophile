import React from "react";
const Typography = ({ type, title, description }) => {
  return (
    <div className="w-[398px] h-[346px] flex flex-col  text-white ">
      <h1>{type}</h1>
      <h1 className="text-[56px] leading-[58px] tracking-[2px] mt-[25px] ">
        {title}
      </h1>
      <p className="mt-[25px]">{description}</p>
    </div>
  );
};

export default Typography;
