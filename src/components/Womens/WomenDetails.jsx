import { useLoaderData } from "react-router-dom";

const WomenDetails = () => {
    // const products = useLoaderData() 
    const {_id,productName} =useLoaderData() // Provide an empty object as fallback
   console.log('p',productName)
    return (
        <div>
            {/* <h1> Total products: {products.length}</h1> */}
            <h1>{productName || "Name Not Available"}</h1> 
            <p>{_id}</p>
            {/* <img src={products.img} alt="" /> */}
        </div>
    );
};

export default WomenDetails;
