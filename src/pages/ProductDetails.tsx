import { Link, useNavigate, useParams } from "react-router-dom";
import productApi from "../redux/api/productApi";
import Loading from "../components/ui/global/Loading";
import ErrorPage from "./ErrorPage";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { addToCart, updateCart } from "../redux/features/cartSlice";
import { useForm } from "react-hook-form";
import CustomButton2 from "../components/ui/Buttons/CustomButton2";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetails = () => {
  const { register, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading, error } = productApi.useGetSingleProductQuery(id);
  const navigate = useNavigate()

  const product = data?.data;

  const cart = useAppSelector((state) => state.cart);
  const cartItem = cart.items?.find((item) => item?._id === product?._id);

  // check if the product is available on stock
  const isOutOfStock = cartItem ? cartItem?.quantity >= product?.stock : false;

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      dispatch(
        cartItem
          ? updateCart({ ...cartItem, quantity: cartItem.quantity + 1 })
          : addToCart({ ...product, quantity: 1 })
      );
      toast.success("Item added to cart");
      navigate('/products/cart')
    }
  };


  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="container mx-auto p-4">
      <Link to={`/products`}>
        <CustomButton2 text="Go Back" textColor="white" bgColor="black" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-1 lg:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
        </div>
        <div className="">
          <div className="bg-white text-center rounded shadow space-y-4 h-full">
            <h3 className="text-2xl border-b p-4 font-bold">{product.name}</h3>
            <p className="text-lg border-b p-4">Price: ${product.price}</p>
            <p className="p-4">{product.description}</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-4 rounded shadow">
            <div className="mb-4">
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="font-bold">${product.price}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>Status:</span>
                <span>{product?.stock > 0 ? "In stock" : "Out of Stock"}</span>
              </div>
            </div>
            {product?.stock > 0 && (
              <form onSubmit={handleSubmit(handleAddToCart)}>
                <div className="mb-4">
                  <label htmlFor="qty" className="block mb-2">
                    Qty
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={decrementQuantity}
                      className="px-3 py-1 bg-gray-300 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id="qty"
                      value={quantity}
                      readOnly
                      {...register("qty")}
                      className="w-12 text-center border-t border-b"
                    />
                    <button
                      type="button"
                      onClick={incrementQuantity}
                      className="px-3 py-1 bg-gray-300 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded"
                  disabled={product?.stock === 0}
                >
                  Add To Cart
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
