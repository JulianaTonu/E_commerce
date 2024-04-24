import { useLoaderData } from "react-router-dom";

const WomenDetails = () => {
    const products = useLoaderData() || {}; // Provide an empty object as fallback
    console.log('product',products)
    return (
        <div>
            <h1> Total products: {products.length}</h1>
            <h1>{products.productName || "Name Not Available"}</h1> 
            <p>{products.newPrice}</p>
            <img src={products.img} alt="" />
        </div>
    );
};

export default WomenDetails;
