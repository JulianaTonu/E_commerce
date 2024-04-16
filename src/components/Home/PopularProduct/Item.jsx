
const Item = ({ id, name, image, oldPrice,newPrice}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className=" ">
                <img src={image} alt="Shoes" className="rounded-md h-80 w-80" />
            </figure>
            <div className="card-body  text-start">
                <h2 className="font-bold text-xl">{name}</h2>
                <div>
                <p>{oldPrice }</p>
                <p>{newPrice }</p>
                </div>
               
            </div>
        </div>
    );
};

export default Item;