import { Link } from "react-router-dom";
import { TProduct } from "../../../types";
import CustomButton from "../Buttons/CustomButton";

const ProductCard = ({ product }: { product: Partial<TProduct> }) => {
  return (
    <div className="text-center relative bg-[#eeeeee89] border p-3 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover mb-4 rounded z-0"
      />
      {product.featured && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFD700" // Golden color
          className="w-6 h-6 absolute top-5 right-5 z-10"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <div className="flex px-3 justify-between items-center">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="font-bold text-2xl">$ {product.price}</p>
      </div>
      <Link to={`/products/details/${product._id}`}>
        <div className="w-full flex flex-col items-center">
          <CustomButton text="Details" textColor="black" />{" "}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
