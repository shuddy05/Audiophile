import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { earphone, headphone, speaker } from "../utils/product";
import ProductCard3 from "../components/Productcard3";
import Feature from "../utils/Feature";
import InTheBox from "../utils/InTheBox";
import ProductGallery from "../utils/ProductGallery";
import Audiogear from "../components/Audiogear";
import RelatedProducts from "../components/RelatedProducts";
import List from "../components/List";
const ProductDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
        <div className="flex flex-col lg:flex-row justify-between lg: justify-start lg:gap-[220px] my-[68px] md:my-[120px] lg:mb-[120px] lg:mt-9  ">
          <div className=" mb-[88px] md:mb-[120px] lg:mb-0 ">
            <Feature feature1={product.feature1} feature2={product.feature2} />
          </div>
          <div>
            <InTheBox inTheBox={product.inTheBox} />
          </div>
        </div>
        <div className="flex flex-col gap-[90px] md:gap-[120px] lg:gap-[150px] ">
          <ProductGallery gallery={product.gallery} />
          <RelatedProducts currentProductId={product.id} />
          <List {...product} />
        </div>
      </section>
      <Audiogear />
    </main>
  );
};

export default ProductDetails;
