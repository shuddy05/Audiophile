import React from "react";
import { Link } from "react-router-dom";
import { earphone, speaker, headphone } from "../utils/product";
const RelatedProducts = ({ currentProductId }) => {
  const products = [...headphone.flat(), ...earphone.flat(), ...speaker.flat()];
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section>
      <h2 className="text-2xl md:text-[32px] font-bold text-center mb-10 md:mb-16 ">
        YOU MAY ALSO LIKE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 ">
        {relatedProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="w-full lg:w-[350px]  aspect-square bg-[#F1F1F1] rounded-lg mb-8 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-8 text-center ">
              {product.name}
            </h3>

            <Link to={`/product/${product.id}`}>
              <button className="bg-[#D87D4A] cursor-pointer hover:bg-[#FBAF85] text-white px-8 py-3 text-[13px] font-bold  transition-colors">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
