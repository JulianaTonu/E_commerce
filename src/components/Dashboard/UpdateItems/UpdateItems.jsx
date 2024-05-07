import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdEdit } from "react-icons/md";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItems = () => {
    const product =useLoaderData();
    const {productName,oldPrice,newPrice,category,details,_id}=product;
    console.log(product)

    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic(); 
    const axiosSecure = useAxiosSecure(); 

    const onSubmit = async (data) => {
        try {
            // Upload Image
            const imageFile = new FormData();
            imageFile.append("image", data.img[0]);
            const imageUploadResponse = await axiosPublic.post(image_hosting_api, imageFile);

            if (imageUploadResponse.data.success) {
                // If image upload is successful, create product object
                const product = {
                    productName: data.productName,
                    category: data.category,
                    oldPrice: parseFloat(data.oldPrice),
                    newPrice: parseFloat(data.newPrice),
                    details: data.details,
                    img: imageUploadResponse.data.data.display_url
                };

                // Post product to the server
                const productResponse = await axiosSecure.patch(`/product/${_id}`, product);

                if (productResponse.data.modifiedCount> 0) {
                    reset()
                    // If product insertion is successful, show success message
                    Swal.fire({
                        position: "top-middle",
                        icon: "success",
                        title: `${data.productName} is updated.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
        }
    };


    return (
        <div>
            <h1 className="font-bold text-3xl mb-7"> Update: {product.productName}</h1>



            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex md:gap-2">
                    {/* //productName  */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input
                            type="text"
                            defaultValue={productName}
                            {...register("productName", { required: true })}
                            placeholder="Type product name"
                            className="input input-bordered w-full" />
                    </label>
                    {/* //Category */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <select defaultValue={category} {...register("category")}
                            className="select select-bordered w-full ">
                            <option value='default' disabled selected>Select a category</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="kid">kid</option>
                        </select>
                    </label>
                </div>
                <div className="flex md:gap-2">
                    {/* //oldPrice */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Old Price</span>
                        </div>
                        <input
                            type="number"
                            defaultValue={oldPrice}
                            {...register("oldPrice")}
                            placeholder="Type Old Price"
                            className="input input-bordered w-full" />
                    </label>
                    {/* //newPrice */}
                    <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text">New Price</span>
                        </div>
                        <input
                            type="number"
                            defaultValue={newPrice}
                            {...register("newPrice")}
                            placeholder="Type New Price"
                            className="input input-bordered w-full" />
                    </label>
                </div>
                {/* details  */}
                <label className="form-control w-full  mb-6">
                    <div className="label">
                        <span className="label-text">Product Details</span>
                    </div>
                    <textarea
                      defaultValue={details}
                        {...register("details")}
                        className="textarea textarea-bordered h-24"
                        placeholder="Product details">
                    </textarea>
                </label>

                <div className="form-control w-full  mb-6">
                    <input
                        {...register("img")}
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs" />

                </div>

                <div className="mt-10 text-center  flex justify-center">
                    <button type="submit" className="p-3 rounded-xl shadow-md bg-slate-900 hover:bg-slate-100 hover:text-black hover:bottom-10 text-white font-semibold px-8  flex text-center">
                        <span className="flex items-center">Update Item <p className="ml-3 animate-pulse"><MdEdit/></p></span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItems;