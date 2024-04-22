import { Link } from "react-router-dom";


const WomenItems = ({ id, name, image, oldPrice,newPrice}) => {
    return (
        <div className="card w-72  ">
        <figure className=" ">
            <Link to={`/Womendetails/${id}`}><img src={image} alt="" className="rounded-md border bg-slate-300 h-80 w-80 hover:scale-125 transition-all duration-500 cursor-pointer" /></Link>
        </figure>
      
      
    </div>
    );
};

export default WomenItems;