import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { earphone, headphone, speaker } from "../utils/product";
import ProductCard3 from "../components/Productcard3";
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
          <ProductCard3 {...product} />;
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
