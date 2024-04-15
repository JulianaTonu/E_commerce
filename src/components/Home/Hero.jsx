import img1 from "../../assets/h1.png"
const Hero = () => {
    return (
        <div className="hero w-full min-h-max bg-orange-400">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={img1} className="max-w-lg rounded-lg h-96" />
                <div className="text-start lg:w-1/2">
                    <h1 className="text-5xl font-bold">Digital Shopping Hub Junction</h1>
                    <p className="py-6 text-slate-700">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>

                    <div className="flex">
                        <div className="rating gap-2 mb-4\3 mr-3">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <div className="font-bold text-lg mb-3">176k <span className="font-normal">Excellent Reviews</span></div>
                    </div>

                    <button className="btn bg-gray-300 ">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;