import React from "react";

const ProductGallery = ({ gallery, image, title }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-10 gap-4 lg:gap-8">
      <div className="col-span-2 lg:col-span-4 bg-[#F1F1F1] rounded-lg overflow-hidden">
        <img
          src={gallery[0]}
          alt={`${title} gallery 1`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = image;
          }}
        />
      </div>
      <div className="col-span-2 lg:col-span-4 bg-[#F1F1F1] rounded-lg overflow-hidden">
        <img
          src={gallery[1]}
          alt={`${title} gallery 2`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = image;
          }}
        />
      </div>
      <div className="col-span-2 lg:col-span-6 lg:row-span-2 bg-[#F1F1F1] rounded-lg overflow-hidden">
        <img
          src={gallery[2]}
          alt={`${title} gallery 3`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = image;
          }}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
