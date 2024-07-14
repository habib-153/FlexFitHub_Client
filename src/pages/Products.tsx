import productApi from "../redux/api/productApi";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Products = () => {
  const { searchTerm, sort, categories} = useAppSelector((state: RootState) => state.filters)
  const { data: products, isLoading, error } = productApi.useGetAllProductQuery({searchTerm, categories,sort});
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
};

export default Products;
