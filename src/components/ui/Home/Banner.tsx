import { Link } from "react-router-dom";
import CustomButton from "../Buttons/CustomButton.jsx";
import bannerImg from "../../../assets/header-image.png";

const Banner = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 items-center my-10">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Accessorize your workouts, train hard, and supply your fitness needs
          with FlexFitHub.
        </h1>
        <p className="text-[1rem]">
          We offer trusted brands that are very popular and will help you meet
          your fitness goals.
        </p>
        <div>
          <Link to="/products">
            <CustomButton
              text="Shop Now"
              textColor="FFFFF5"
              bgColor="1a1c1cfd"
            />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <img className="mr-0" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
