/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@material-tailwind/react";
import productApi from "../redux/api/productApi";
import { Link } from "react-router-dom";
import { TProduct } from "../types";
import Loading from "../components/ui/global/Loading";
import ErrorPage from "./ErrorPage";
import { handleDeleteProduct } from "../utils/handleDeleteProduct";
import { toast } from "sonner";

const ProductManagement = () => {
  const { data, isLoading, error } = productApi.useGetAllProductQuery({});
  const [deleteProduct] = productApi.useDeleteProductMutation();
  const [updateProduct] = productApi.useUpdateProductMutation();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  const handleUpdateFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const payload = { featured: !currentFeatured };
      await updateProduct({ id, payload });
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  const TABLE_HEAD = ["Name", "Price", "Category", "Featured", "Action"];
  const products = data?.data;
  return (
    <div className="px-1">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold my-6">Manage Products</h1>
        <Link to="/products/addProduct">
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="flex items-center sm:text-lg normal-case gap-2 py-2 px-5"
          >
            {" "}
            Add Product
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
                //strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Button>
        </Link>
      </div>
      <div className="md:w-[750px] my-8 rounded-2xl lg:w-[1200px] overflow-scroll">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <p
                    color="blue-gray"
                    className="font-normal text-sm leading-none opacity-70"
                  >
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map(
              (
                { _id, name, price, category, featured }: Partial<TProduct>,
                index: number
              ) => {
                const isLast = index === [products].length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <p color="blue-gray" className="font-normal text-sm ">
                        {name}
                      </p>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <p color="blue-gray" className="font-normal">
                        {price}
                      </p>
                    </td>
                    <td className={classes}>
                      <p color="blue-gray" className="font-normal">
                        {category}
                      </p>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      {featured ? (
                        <Button
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          onClick={() =>
                            handleUpdateFeatured(_id as string, true)
                          }
                          className="p-0"
                          variant="text"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#FFD700" // Golden color
                            className="size-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      ) : (
                        <Button
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          onClick={() =>
                            handleUpdateFeatured(_id as string, false)
                          }
                          className="p-0"
                          variant="text"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                        </Button>
                      )}
                    </td>
                    <td className={`${classes} text-center`}>
                      <div className="flex sm:flex-row flex-col gap-2">
                        <Button
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          size="sm"
                          onClick={() =>
                            handleDeleteProduct(_id as string, deleteProduct)
                          }
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
                        <Link to={`/products/update/${_id}`}>
                          <Button
                            size="sm"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
