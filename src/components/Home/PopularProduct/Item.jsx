
const Item = ({ id, name, image, oldPrice,newPrice}) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className=" ">
                <img src={image} alt="Shoes" className="rounded-md h-80 w-80 hover:scale-125 transition-all duration-500 cursor-pointer" />
            </figure>
            <div className="p-2 ms-4  text-start">
                <h2 className="font-bold text-xl">{name}</h2>
                <div className="flex gap-4">
                <p className="text-lg">{newPrice }</p>
                <p className="text-[#da8214] bold font-semibold line-through mt-1">{oldPrice }</p>
                </div>
               
            </div>
        </div>
    );
};

export default Item;