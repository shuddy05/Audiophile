import image from "../../assets/image-removebg-preview(47).png";
import List from "./List";
import ProductDisplay from "./ProductDisplay";
import Typography from "../../components/Typography";
import { typo1 } from "../../utils/typography";
import Button from "../../components/Button";
const Home = () => {
  return (
    <main>
      <section className="bg-black">
        <div className="layout bg-black text-white max-h-[729px] flex items-center justify-center gap-30 ">
          <div className="flex flex-col ">
            {typo1.map((text) => {
              return <Typography key={text.id} {...text} />;
            })}
            <Button className="bg-[#D87D4A] text-white mt-[-35px] " />
          </div>
          <div>
            <img src={image} alt="" className="w-[500px]  " />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="layout my-[172px] ">
          <List />
        </div>
      </section>
      <section className="layout">
        <ProductDisplay />
      </section> */}
    </main>
  );
};

export default Home;
