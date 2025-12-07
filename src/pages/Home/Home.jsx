import HeroSection from "./HeroSection";
import List from "../../components/List";
import ProductDisplay from "./ProductDisplay";
import Audiogear from "../../components/Audiogear";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { earphone, headphone, speaker } from "../../utils/product";
// import ProductCard3 from "../../components/Productcard3";
const Home = () => {
  return (
    <main>
      <HeroSection />
      <section>
        <div className="layout mb-[80px] mt-[160px] ">
          <List />
        </div>
      </section>
      <section className="layout">
        <ProductDisplay />
      </section>
        <Audiogear />
    </main>
  );
};

export default Home;
