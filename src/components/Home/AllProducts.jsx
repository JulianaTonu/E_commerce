import useProduct from "../../hooks/useProduct";
import Item from "./PopularProduct/Item";


const AllProducts = () => {
    const [product]=useProduct()
    return (
        <div className="bg-gray-100  py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold items-center text-center text-orange-500 mb-6 ">Discover Our Popular Picks<p className="w-64 items-start mx-auto border-b-4 mt-2  border-black "></p></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-auto justify-center">
                    {product.map((item) => ( // Use slice(0, 4) to only take the first four items
                        <Item
                        key={item._id}
                        item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;