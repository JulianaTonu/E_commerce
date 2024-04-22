import coverKids from "../../assets/kids/coverk.png" 
import { useEffect, useState } from 'react';
import coverWomen from '../../assets/womens/coverWm.jpg'
import data from '../../assets/popular';
import Item from '../Home/PopularProduct/Item';
const Kids = () => {
    const [kidProducts, setKidProducts] = useState([]);

    useEffect(() => {
        const products = data.filter(product => product.category === 'kid');
        setKidProducts(products);
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div>
            <div>
                <img src={coverKids} alt="" className='w-full lg:h-96' />
            </div>

            <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold items-center text-center text-orange-500 mb-6 ">Kid Products<p className="w-64 items-start mx-auto border-b-4 mt-2  border-black "></p></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-auto justify-center">
                    {kidProducts.map((item) => (
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
        </div>
    );
};

export default Kids;