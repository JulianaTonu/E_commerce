import POPULAR from "../../../assets/popular";
import Item from "./Item";

const PopularSection = () => {
    

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold items-center text-center text-[#da8214] mb-6 ">Discover Our Popular Picks<p className="w-64 items-start mx-auto border-b-4 mt-2  border-black "></p></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-auto justify-center">
                    {POPULAR.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            image={item.img}
                            name={item.productName}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularSection;
