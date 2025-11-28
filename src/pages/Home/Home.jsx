import HeroSection from "./HeroSection";
import List from "../../components/List";
import ProductDisplay from "./ProductDisplay";
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
    </main>
  );
};

export default Home;
