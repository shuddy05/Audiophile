import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, className, id }) => {
  return (
    <Link to={id}>
      <button
        type={type}
        className={` w-[160PX] h-[48px] p-3 cursor-pointer  text-[13px] ${className}`}
      >
        SEE PRODUCT
      </button>
    </Link>
  );
};

export default Button;
