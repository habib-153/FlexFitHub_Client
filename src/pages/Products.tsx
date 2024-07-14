import Loading from "../components/ui/global/Loading";
import Category from "../components/ui/Product/Category";
import ClearFilter from "../components/ui/Product/ClearFilter";
import Search from "../components/ui/Product/Search";
import productApi from "../redux/api/productApi";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import ErrorPage from "./ErrorPage";

const Products = () => {
  const { searchTerm, sort, categories} = useAppSelector((state: RootState) => state.filter)
  const { data: products, isLoading, error } = productApi.useGetAllProductQuery({searchTerm, categories,sort});

  if(isLoading) return <Loading />
  if(error) return <ErrorPage />

  return (
    <div className="px-2 w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:gap-12">
      <div className="md:hidden w-full my-2">
            <Search />
          </div>
          <div className="flex flex-col my-1 md:flex-row items-center gap-3">
            <Category />
            <div className="md:mt-2 w-full md:w-fit text-right">
              <ClearFilter />
            </div>
          </div>
          <div className="hidden md:block">
            <Search />
          </div>
      </div>
    </div>
  )
};

export default Products;
