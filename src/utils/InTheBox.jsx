import React from "react";

const InTheBox = ({ inTheBox }) => {
  return (
    <div className=" sm:block  md:flex justify-between  md:gap-50 md:justify-start lg:block ">
      <h1 className="text-[24px] md:text-3xl font-bold mb-[24px] lg:mb-8 ">
        {" "}
        IN THE BOX{" "}
      </h1>
      <ul>
        {inTheBox.map((item, index) => (
          <li key={index} className="flex items-start gap-6">
            <span className="text-[#D87D4A] font-bold min-w-[30px] ">
              {item.quantity} X
            </span>
            <span className="text-black/50"> {item.item} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InTheBox;
