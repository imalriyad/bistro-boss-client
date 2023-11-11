import Callus from "../Components/Callus";
import Categories from "../Components/Category/Categories";
import CheifReq from "../Components/CheifReq";
import Featureditem from "../Components/Featureditem";
import Banner from "../Header/Banner";
import PopulerItem from "../Polpuler Item/PopulerItem";
import Testimonial from "../Testimonial/Testimonial";
import About from "./About";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <About></About>
      <PopulerItem></PopulerItem>
      <Callus></Callus>
      <CheifReq></CheifReq>
      <Featureditem></Featureditem>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
