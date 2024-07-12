import Banner from "../components/ui/Home/Banner";
import Benefits from "../components/ui/Home/Benefits/Benefits";
import Categories from "../components/ui/Home/Category/Categories";
import FeaturedProduct from "../components/ui/Home/FeaturedProduct/FeaturedProduct";
import ImageGallery from "../components/ui/Home/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProduct />
      <Benefits />
      <ImageGallery />
    </div>
  );
};

export default Home;
