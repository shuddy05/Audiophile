import React from "react";
import SpeakerImage from "../../assets/speaker.png";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { typo2 } from "../../utils/typography";
import image from "../../assets/Bitmap.png";
import earphone from "../../assets/earphone.png";
const ProductDisplay = () => {
  return (
    <main>
      <section className="layout">
        <div className=" h-[560px] bg-[#D87D4A] flex flex-col gap-7 justify-center items-center lg:relative rounded-[8px] ">
          <img
            src={SpeakerImage}
            alt=""
            className=" w-[180px] h-[250px] lg:w-[410px] lg:h-[485px] lg:absolute lg:left-[117px] lg:bottom-0 "
          />
          <div className="text-center  lg:text-start lg:absolute lg:right-[95px] lg:top-[120px] ">
            {typo2.map((text) => {
              return <Typography key={text.id} {...text} />;
            })}
            <Button className="bg-black text-white hover:bg-[#4C4C4C]  mt-[35px]  " />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="relative rounded-[8px] my-[48px] h-[320px] w-full bg-cover bg-center"
        >
          <div className=" absolute z-10 top-[101px] left-[95px] ">
            <h1 className="font-bold text-[28px] ">ZX7 SPEAKER</h1>

            <Button className="border-2 border-black mt-[35px] " />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 ">
          <img src={earphone} alt="" className="md:w-1/2" />
          <div className=" relative md:w-1/2 ">
            <div className=" w-full bg-[#F1F1F1] h-[300px] lg:h-full rounded-[8px] flex justify-center items-center   ">
              <div className="absolute lg:top-[101px] lg:left-[95px]  ">
                <h1 className="font-bold text-[28px] ">YX1 EARPHONES</h1>

                <Button className="border-2 border-black mt-[35px] " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDisplay;
