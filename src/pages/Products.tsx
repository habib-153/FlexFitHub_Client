import Loading from "../components/ui/global/Loading";
import Category from "../components/ui/Product/Category";
import ClearFilter from "../components/ui/Product/ClearFilter";
import ProductCard from "../components/ui/Product/ProductCard";
import Search from "../components/ui/Product/Search";
import Sort from "../components/ui/Product/Sort";
import productApi from "../redux/api/productApi";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { TProduct } from "../types";
import ErrorPage from "./ErrorPage";

const Products = () => {
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filter
  );
  const {
    data: products,
    isLoading,
    error,
  } = productApi.useGetAllProductQuery({ searchTerm, categories, sort });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="px-2 w-full my-6">
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:gap-12">
        <div className="md:hidden w-full my-2">
          <Search />
        </div>
        <div className="flex flex-col my-1 md:flex-row items-center gap-3">
          <Category />
          <div className="md:mt-2 flex items-center justify-between sm:gap-12 lg:gap-20 w-full md:w-fit text-right">
            <ClearFilter />
            <Sort />
          </div>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
      </div>
      <div className="grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products?.data?.map((product: TProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
