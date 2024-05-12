import { Link } from "react-router-dom";
import img1 from "../../assets/h3.png"
const Hero = () => {
    return (
        <div className="hero w-full min-h-max bg-orange-200">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={img1} className="md:w-[400px] md:h-[500px] w-[250px] h-[300px] rounded-lg " />

                <div className="text-start w-full lg:w-1/2">
                    <h1 className="md:text-5xl text-3xl font-bold">Digital Shopping Hub Junction</h1>
                    <p className="py-6 text-slate-700">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>

                    <div className="flex">
                        <div className="rating gap-2 mb-4\3 mr-3 w-28 md:w-auto">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <div className="font-bold text-lg mb-3">176k <span className="font-normal text-sm md:text-base">Excellent Reviews</span></div>
                    </div>
                    <Link to='/allProducts'>
                        <button className="p-3 rounded-xl shadow-md text-white font-semibold bg-orange-500 px-8 hover:bg-[#673f0e]">Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;