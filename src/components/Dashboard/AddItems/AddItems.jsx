import { useForm } from "react-hook-form";
import { MdAddCircle } from "react-icons/md";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
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
                            {...register("name")}
                            placeholder="Type product name"
                            className="input input-bordered w-full" />
                    </label>
                    {/* //Cagtegory */}
                    <label className="form-control w-full md:my-2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <select {...register("category")}
                            className="select select-bordered w-full ">
                            <option disabled selected>Select a category</option>
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
                    <label className="form-control w-full md:my-2 ">
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
{/* //newPrice */}
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
<input type="file" className="file-input file-input-bordered w-full max-w-xs" />

</div>

<div className="mt-10 text-center  flex justify-center">
                <button type="submit" className="p-3 rounded-xl shadow-md bg-slate-900 hover:bg-slate-100 hover:text-black hover:bottom-10 text-white font-semibold px-8  flex text-center">
                    <span className="flex items-center">Add Item <p className="ml-3 animate-pulse"><MdAddCircle/></p></span>
                </button>
            </div>
                <input className=""  />
            </form>
        </div>
    );
};

export default AddItems;