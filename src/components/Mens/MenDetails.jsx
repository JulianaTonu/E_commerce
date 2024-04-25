import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenDetails = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then(data => {
                // Assuming data is an array of products
                const selectedProduct = data.find(item => item.id === id);
                if (!selectedProduct) {
                    throw new Error('Product not found');
                }
                setProduct(selectedProduct);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle error state, display error message, etc.
            });
    }, [id]);

    if (!product) {
        return    console.log('product',product)
     
    }

    return (
        <div>
            <h1>Mens product: {product.productName}</h1>
            {/* Render other product details here */}
        </div>
    );
};

export default MenDetails;
