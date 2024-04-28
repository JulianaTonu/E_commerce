import coverWomen from '../../assets/womens/coverWm.jpg'
// import data from '../../assets/popular';
import WomenItems from './WomenItems';
import useProduct from '../../hooks/useProduct';
const Womens = () => {
    
const [product]=useProduct()
const womenProducts =product.filter(data=>data.category === "Female")
   
    return (
        <div>
            <div>
                <img src={coverWomen} alt="" className='w-full lg:h-96' />
            </div>

            <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold items-center text-center text-orange-500 mb-6 ">Women Products<p className="w-64 items-start mx-auto border-b-4 mt-2  border-black "></p></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-auto justify-center">
                    {womenProducts.map((item) => (
                        <WomenItems
                            key={item.id}
                            _id={item._id}
                            image={item.img}
                            item={item}
                            name={item.productName}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Womens;