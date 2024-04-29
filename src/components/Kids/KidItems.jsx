import { Link } from "react-router-dom";


const KidItems = ({ _id, name, image, oldPrice, newPrice }) => {
    return (
        <div className="card w-72  ">
            <figure className=" ">
                <Link to={`/MenItemsDetails/${_id}`}><img src={image} alt="" className="rounded-md border bg-slate-300 h-80 w-80 hover:scale-125 transition-all duration-500 cursor-pointer" /></Link>
            </figure>
            <div className="p-2 ms-4  text-center">
                <h2 className="font-bold text-xl">{name}</h2>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="flex gap-4 text-center justify-center">
                    <p className="text-lg">{newPrice}</p>
                    <p className="text-[#da8214] bold font-semibold line-through mt-1">{oldPrice}</p>
                </div>

            </div>
        </div>
    );
};

export default KidItems;