/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import productApi from "../../../redux/api/productApi";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { FormInput } from "./FormInput";
import { Textarea } from "@material-tailwind/react";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { id } = useParams();
  const { data } = productApi.useGetSingleProductQuery(id);
  const [updateProduct] = productApi.useUpdateProductMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    values: data?.data,
    resetOptions: {
      keepDefaultValues: true,
    },
  });

  const onSubmit = async (formData: any) => {
    //console.log(data);
    const imageFile = { image: formData.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res?.data?.success) {
      const payload = {
        name: formData.name,
        price: parseInt(formData.price),
        category: formData.category,
        description: formData.description,
        stock: parseInt(formData.stock),
        image: res.data.data.display_url,
      };
      const result = await updateProduct({ id, payload });
      
      if (result?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Product Updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/products/management");
      } else {
        toast.error("Failed to update product");
      }
    }
  };

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold my-6">Update Product</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <FormInput
                type="text"
                register={{ ...register("name") }}
                required
                label="Product Name"
              />
            </div>
            <div className="form-control">
              <FormInput
                type="number"
                register={{ ...register("price") }}
                required
                label="Price"
              />
            </div>
          </div>
          <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <FormInput
                type="text"
                register={{ ...register("category") }}
                required
                label="Category"
              />
            </div>
            <div className="form-control">
              <FormInput
                type="number"
                register={{ ...register("stock") }}
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
            <FormInput
              register={{ ...register("image", { required: true }) }}
              type="file"
              required
              label="Image"
              defaultValue={data?.data?.image}
            />
          </div>
          <div className="w-full text-center ">
            {/* <CustomButton text="Add Product" bgColor="#000000" textColor="#FFFFFF" /> */}
            <button className="bg-[#000000] text-white px-5 py-2 rounded-lg">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
