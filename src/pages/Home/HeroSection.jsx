import React from "react";
import image from "../../assets/headphone.png";
import Typography from "../../components/Typography";
import { typo1 } from "../../utils/typography";
import Button from "../../components/Button";
const HeroSection = () => {
  return (
    <section className=" bg-black  ">
      <div className=" hidden layout w-full   bg-black text-white h-[729px]  lg:flex  items-center justify-center gap-30   ">
        <div className="  ">
          {typo1.map((text) => {
            return <Typography key={text.id} {...text} />;
          })}
          <Button className="bg-[#D87D4A] text-white mt-5 " />
        </div>
        <div className="">
          <img src={image} alt="" className="w-[500px]   " />
        </div>
      </div>
      <div className=" lg:hidden  h-[500px] md:h-[650px]  w-full  text-white text-center flex justify-center items-center relative    ">
        <div className="flex flex-col gap-8 z-10  ">
          {typo1.map((text) => {
            return <Typography key={text.id} {...text} />;
          })}

          <Button className="bg-[#D87D4A] text-white mx-auto  " />
        </div>
        <div className="absolute w-full  md:min-w-[600px] ">
          <img
            src={image}
            alt=""
            className="w-full md:max-w-[600px]  mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
