import { Link } from "react-router-dom";

const Item = ({item}) => {
    const { _id, productName, img, oldPrice,newPrice}=item 
    return (
        <div className="card lg:w-72 ">
        <figure className=" ">
            <Link to={`/productDetails/${_id}`}><img src={img} alt="" className="rounded-md border bg-slate-300 h-80 w-80 hover:scale-125 transition-all duration-500 cursor-pointer" /></Link>
        </figure>
        <div className="p-2 ms-4  text-center">
            <h2 className="font-bold text-xl">{productName}</h2>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className="flex gap-4 text-center justify-center">
                <p className="text-lg">${newPrice}</p>
                <p className="text-[#da8214] bold font-semibold line-through mt-1">${oldPrice}</p>
            </div>

        </div>
    </div>
    );
};

export default Item;
