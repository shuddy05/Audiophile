import React from "react";

const ProductGallery = ({ gallery, image, title }) => {
  return (
    <div className=" flex flex-col lg:flex-row gap-[18px] items-center    ">
      <div className="space-y-[20px] ">
        <div className=" ">
          <img
            src={gallery[2]}
            alt={`${title} gallery 1`}
            className="w-full h-full object-cover md:w-[648px] lg:w-full "
            onError={(e) => {
              e.target.src = image;
            }}
          />
        </div>
        <div className="md:w-full">
          <img
            src={gallery[1]}
            alt={`${title} gallery 2`}
            className="w-full h-full object-cover md:w-[648px] lg:w-full "
            onError={(e) => {
              e.target.src = image;
            }}
          />
        </div>
      </div>
      <div className="">
        <img
          src={gallery[0]}
          alt={`${title} gallery 3`}
          className="w-full h-full object-cover md:-w-[648px] lg:w-full "
          onError={(e) => {
            e.target.src = image;
          }}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
