import { Toaster } from "sonner";
import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { useEffect } from "react";

const App = () => {
  const cart = useAppSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cart.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have items in your cart. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);
  return (
    <div className="">
      <MainLayout></MainLayout>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
