/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textarea } from "@material-tailwind/react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import productApi from "../../../redux/api/productApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
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
              <FormInput
                type="text"
                register={{...register("name")}}
                required
                label="Product Name"
              />
            </div>
            <div className="form-control">
              <FormInput
                type="number"
                register={{...register("price")}}
                required
                label="Price"
              />
            </div>
          </div>
          <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <FormInput
                type="text"
                register={{...register("category")}}
                required
                label="Category"
              />
            </div>
            <div className="form-control">
              <FormInput
                type="number"
                register={{...register("stock")}}
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
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            ></Textarea>
          </div>
          <div className="form-control w-full my-4">
            <FormInput
              register={{...register("image", { required: true })}}
              type="file"
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
