import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { earphone, headphone, speaker } from "../utils/product";
import ProductCard3 from "../components/Productcard3";
import Feature from "../utils/Feature";
import InTheBox from "../utils/InTheBox";
import ProductGallery from "../utils/ProductGallery";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allProducts = [
    ...headphone.flat(),
    ...earphone.flat(),
    ...speaker.flat(),
  ];
  const product = allProducts.find((p) => p.id === parseInt(id));
  return (
    <main>
      <section className="layout">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-black/50 hover:text-[#D87D4A] cursor-pointer "
        >
          Go Back
        </button>
        <div>
          <ProductCard3 {...product} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between ">
          <Feature feature1={product.feature1} feature2={product.feature2} />
          <InTheBox inTheBox={product.inTheBox} />
        </div>
        <div>
          <ProductGallery gallery={product.gallery} />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
