import { useLoaderData } from "react-router-dom";

const WomenDetails = () => {
    const { name,image,newPrice } = useLoaderData() || {}; // Provide an empty object as fallback
    return (
        <div>
            <h1>{name || "Name Not Available"}</h1> {/* Handle the case where name is undefined */}
            <p>{newPrice}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default WomenDetails;
