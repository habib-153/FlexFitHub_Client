/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import productApi from "../../../redux/api/productApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

interface FormValues {
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  image: any;
}

const CreateProduct = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [createProduct] = productApi.useCreateProductMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    //console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const product = {
        name: data.name,
        price: parseInt(data.price),
        category: data.category,
        description: data.description,
        stock: parseInt(data.stock),
        image: res.data.data.display_url,
      };
      const result = await createProduct(product);
      //console.log(result);
      if (result.data.success) {
        Swal.fire({
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/products/management");
      } else {
        toast.error("Failed to add product");
      }
    }
  };

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold my-6">Add New Product</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <Input
                placeholder="Enter Product Name"
                type="text"
                {...register("name")}
                className="w-full px-3 py-2 border rounded"
                required
                label="Product Name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <Input
                placeholder="Enter Product Price"
                type="number"
                {...register("price")}
                className="w-full px-3 py-2 border rounded"
                required
                label="Price"
              />
            </div>
          </div>
          <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <Input
                placeholder="Enter Product Category"
                type="text"
                {...register("category")}
                className="w-full px-3 py-2 border rounded"
                required
                label="Category"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <Input
                placeholder="Enter Product Stock"
                type="number"
                {...register("stock")}
                className="w-full px-3 py-2 border rounded"
                required
                label="Stock"
              />
            </div>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <Textarea
              {...register("description", { required: true })}
              className="textarea h-24 textarea-bordered"
              required
              label="Description"
            ></Textarea>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Image</span>
            </label>
            <Input
              {...register("image", { required: true })}
              type="file"
              className="input input-bordered pt-2"
              required
              label="Image"
            />
          </div>
          <div className="w-full text-center ">
            {/* <CustomButton text="Add Product" bgColor="#000000" textColor="#FFFFFF" /> */}
            <button className="bg-[#000000] text-white px-5 py-2 rounded-lg">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateProduct;
