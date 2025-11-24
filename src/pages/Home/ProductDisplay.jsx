import React from "react";
import SpeakerImage from "../../assets/speaker.png";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { typo2 } from "../../utils/typography";
import image from "../../assets/Bitmap.png";
import { Link } from "react-router-dom";
import earphone from "../../assets/Bitmap (1).png";
const ProductDisplay = () => {
  return (
    <main>
      <section className="layout">
        <div className=" h-[560px] bg-[#D87D4A] relative rounded-[8px] ">
          <img
            src={SpeakerImage}
            alt=""
            className="w-[410px] h-[485px] absolute left-[117px] bottom-0 "
          />
          <div className="absolute right-[95px] top-[120px] ">
            {typo2.map((text) => {
              return <Typography key={text.id} {...text} />;
            })}
            <Button className="bg-black text-white mt-[-100px] " />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="relative rounded-[8px] my-[48px] h-[320px] w-full bg-cover bg-center"
        >
          <div className=" absolute z-10 top-[101px] left-[95px] ">
            <h1 className="font-bold text-[28px] ">ZX7 SPEAKER</h1>
            <Link>
              <Button className="border-2 border-black mt-[35px] " />
            </Link>
          </div>
        </div>
        <div className="flex justify-between  ">
          <img src={earphone} alt="" />
          <div className=" relative ">
            <div className=" w-[540px] bg-[#F1F1F1] h-[320px] rounded-[8px]   ">
              <div className="absolute top-[101px] left-[95px]">
                <h1 className="font-bold text-[28px] ">YX1 EARPHONES</h1>
                <Link>
                  <Button className="border-2 border-black mt-[35px] " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDisplay;
