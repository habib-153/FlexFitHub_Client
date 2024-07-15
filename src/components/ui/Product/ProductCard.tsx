import { Link } from "react-router-dom";
import { TProduct } from "../../../types";
import CustomButton from "../Buttons/CustomButton";

const ProductCard = ({ product }: { product: Partial<TProduct> }) => {
  return (
    <div className="text-center bg-[#eeeeee89] border p-3 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover mb-4 rounded"
      />
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
