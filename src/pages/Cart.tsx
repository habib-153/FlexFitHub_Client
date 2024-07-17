import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2";
import { removeFromCart, updateCart } from "../redux/features/cartSlice";
import { toast } from "sonner";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.cart);

  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        toast.success("Item removed from cart");
      }
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateCart({ id, quantity }));
  };

  return (
    <div className="w-full px-2">
      <h1 className="text-3xl font-bold my-7 text-center">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        <div className="lg:col-span-2">
          {cart.items.length === 0 ? (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-center">
              Your cart is empty.{" "}
              <Link to="/products" className="text-blue-500">
                Shop Now.
              </Link>
            </div>
          ) : (
            <div className="bg-white lg:col-span-2 shadow rounded">
              {cart.items.map((item) => (
                <div key={item._id} className="flex items-center px-4 justify-between border-b">
                  <div className="w-1/6">
                    <img src={item.image} alt={item.name} className="rounded" />
                  </div>
                  <div className="">
                    <Link
                      to={`/products/details/${item?._id}`}
                      className="text-blue-500"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="">${item.price}</div>
                  <div className="">
                    <div className="flex items-center">
                      <button
                        className="px-2 bg-red-500 rounded-lg"
                        onClick={() =>
                          handleUpdateQuantity(item._id!, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 bg-green-500 rounded-lg"
                        onClick={() =>
                          handleUpdateQuantity(item._id!, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <Button
                      size="sm"
                      onClick={() => handleRemoveItem(item._id as string)}
                      className="bg-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          // strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" flex-1 mt-4 md:mt-0 md:ml-4">
          <div className="bg-white shadow rounded">
            <div className="mb-4 text-center border-b py-5">
              <h2 className="text-3xl font-semibold px-5">
                Subtotal (
                {cart.items.reduce((acc, item) => acc + item.quantity, 0)})
                items
              </h2>
              <p className="text-lg">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="p-5">
              <button
                type="button"
                className="w-full bg-black text-white py-2 rounded"
                disabled={cart.items.length === 0}
                // onClick={checkOutHandler}
              >
                Proceed To CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
