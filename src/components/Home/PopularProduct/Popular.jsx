import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import Item from "./Item";
import { FaArrowRight } from "react-icons/fa";

const PopularSection = () => {
    const [product] = useProduct();

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Discover Our Popular Picks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {product.slice(0, 4).map((item) => (
                        <Item
                            key={item._id}
                            item={item}
                        />
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link to="/allProducts">
                        <button className="p-3 rounded-xl shadow-md hover:bg-black text-white font-semibold bg-orange-500 px-8 flex items-center">
                            <span>See all</span>
                            <p className="ml-3 animate-pulse"><FaArrowRight /></p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularSection;
