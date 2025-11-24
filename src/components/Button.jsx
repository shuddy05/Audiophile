import React from "react";

const Button = ({ type, className }) => {
  return (
    <button
      type={type}
      className={` w-[160PX] h-[48px] p-3 cursor-pointer  text-[13px] ${className}`}
    >
      SEE PRODUCT
    </button>
  );
};

export default Button;
