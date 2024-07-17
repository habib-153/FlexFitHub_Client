import CheckoutForm from "../components/ui/Checkout/Form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { TCheckoutForm, TOrder } from "../types";
import { SubmitHandler } from "react-hook-form";
import orderApi from "../redux/api/orderApi";
import { toast } from "sonner";
import { clearCart } from "../redux/features/cartSlice";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const [createOrder] = orderApi.useCreateOrderMutation();

  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const submitHandler: SubmitHandler<TCheckoutForm> = async (data) => {
    // Handle form submission
    console.log(data);

    const order: TOrder = {
      userInfo: data,
      cartItem: cart.items,
    };
    try {
      await createOrder(order);
      dispatch(clearCart());
      toast.success("Order Placed Successfully");
      navigate("/products");
    } catch (err) {
      toast.error("Failed to Place order");
    }
  };

  return (
    <div className="my-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4">
        <div className="col-span-5 w-full mx-auto  bg-white  rounded shadow">
          <div className="mx-auto">
            <CheckoutForm submitHandler={submitHandler} />
          </div>
        </div>
        <div className="w-full lg:col-span-3 h-fit bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4 border-b p-6">
            Order Summary
          </h2>
          <div className="my-2 space-y-4 px-4">
            {cart.items.map((item, idx) => (
              <div
                key={item?._id}
                className="flex justify-between items-center py-6 px-3 bg-gray-100 rounded shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span>{idx+1}</span>
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500">x</span>
                  <span className="font-semibold">{item.quantity}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex px-4 py-6 justify-between items-center">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">
                $
                {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
