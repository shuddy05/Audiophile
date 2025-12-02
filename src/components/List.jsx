import React from "react";
import Speaker from "../assets/speaker.png";
import Headphone from "../assets/headphone.png";
import Earphone from "../assets/Group 5.png";
import icon from "../assets/Path 2.png";
import { Link } from "react-router-dom";
const List = () => {
  const products = [
    {
      id: 1,
      image: Headphone,
      title: "HEADPHONES",
      button: "SHOP",
      to: "headphone",
    },
    {
      id: 2,
      image: Speaker,
      title: "SPEAKERS",
      button: "SHOP",
      to: "speaker",
    },
    {
      id: 3,
      image: Earphone,
      title: "EARPHONES",
      button: "SHOP",
      to: "earphone",
    },
  ];
  return (
    <div>
      <div className="layout flex flex-col md:flex-row gap-[90px] md:gap-4 items-center justify-between">
        {products.map((product) => {
          const { id, image, title, to, button } = product;
          return (
            <div
              key={id}
              className=" relative w-[350px] max-h-[240px] rounded-[8px] bg-[#F1F1F1] flex flex-col justify-center items-center   "
            >
              <img
                src={image}
                alt=""
                className=" absolute top-[-80px] w-[122px] max-h-[160px]  "
              />
              <h1 className="text-[18px] mt-[100px] font-bold  ">{title}</h1>
              <Link key={id} to={to}>
                <button className="text-black/50 my-[25px] text-[13px] cursor-pointer w-[57px] h-[18px] flex justify-between items-center ">
                  {button}
                  <img src={icon} alt="" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
