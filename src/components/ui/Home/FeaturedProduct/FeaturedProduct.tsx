import productApi from "../../../../redux/api/productApi";
import { TProduct } from "../../../../types";
import Loading from "../../global/Loading";
import ProductCard from "../../Product/ProductCard";

const FeaturedProduct = () => {
  const { data, error, isLoading } =
    productApi.useGetFeaturedProductQuery(undefined);

  const featuredProducts = data?.data;

  if (isLoading){
    return <Loading />;
  }

    if (error) {
        return <h1>Error to fetching Data</h1>;
    }

  return (
    <div>
      <h2 className="text-3xl font-semibold">Featured Products</h2>
      <div className="grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {featuredProducts?.map((product: TProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
