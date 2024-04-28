import { useLoaderData } from "react-router-dom";

const WomenDetails = () => {
    const { productName, img, newPrice, oldPrice } = useLoaderData()
    return (
        <div className="md:flex">
            <div className="md:w-1/2 mt-4">
                <img src={img} alt="" className="lg:w-[550px]" />
            </div>
            <div className="md:w-1/3 mt-8">
                <h1 className=" text-3xl font-bold ">{productName || "Name Not Available"}</h1>
                <p className="my-2 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deserunt similique perspiciatis omnis saepe
                    cum? Officiis fugit qui similique enim, quidem ad atque
                    voluptas quo pariatur repellat, aut maiores temporibus.</p>

                <div className="flex items-center mt-8">
                <p className="line-through">${oldPrice}</p>
                <p className="ms-3 font-bold text-4xl text-orange-600">${newPrice}</p>
                </div>

                

            </div>

        </div>
    );
};

export default WomenDetails;
