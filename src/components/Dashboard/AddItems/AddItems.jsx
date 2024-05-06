import { useForm } from "react-hook-form";
import { MdAddCircle } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic(); // Assuming this hook returns an axios instance
    const axiosSecure = useAxiosSecure(); // Assuming this hook returns an axios instance

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
                    oldPrice: data.oldPrice,
                    newPrice: data.newPrice,
                    details: data.details,
                    img: imageUploadResponse.data.data.display_url
                };

                // Post product to the server
                const productResponse = await axiosSecure.post('/product', product);

                if (productResponse.data.insertedId) {
                    // If product insertion is successful, show success message
                    Swal.fire({
                        position: "top-middle",
                        icon: "success",
                        title: `${data.productName} has been added.`,
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
            <h1 className="font-bold text-3xl mb-7">Add Item</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex md:gap-2">
                    {/* //productName  */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input
                            type="text"
                            {...register("productName", { required: true })}
                            placeholder="Type product name"
                            className="input input-bordered w-full" />
                    </label>
                    {/* //Cagtegory */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <select defaultValue='default' {...register("category")}
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
                        <span className="flex items-center">Add Item <p className="ml-3 animate-pulse"><MdAddCircle /></p></span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;