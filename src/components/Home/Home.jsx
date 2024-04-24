import Hero from "./Hero";
import Popular from "./PopularProduct/Popular";
import pic from '../../assets/offer1.jpg'
import pic1 from '../../assets/newsletter.png'
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular></Popular>

            {/* //Deal Of the day */}
            <div className="hero bg-orange-200 my-4 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic} className="lg:w-1/2 rounded-2xl m-8" />
                    <div className="py-2">
                        <h1 className="md:text-5xl text-2xl font-bold mb-4">Deal Of the day</h1>
                        <p className="">Provident cupiditate voluptatem et in. Quaerat <br /> fugiat ut assumenda excepturi exercitationem quasi. <br />In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="my-6 flex gap-4">
                            <div className="w-25 text-center bg-white p-4 rounded-lg font-bold text-2xl">
                                <p>04</p>
                                <p className="px-2">Days</p>
                            </div>
                            <div className="w-25 text-center bg-white p-4 rounded-lg font-bold text-2xl">
                                <p>09</p>
                                <p>Hours</p>
                            </div>
                            <div className="w-25 text-center bg-white p-4 rounded-lg font-bold text-2xl">
                                <p>03</p>
                                <p>Minute</p>
                            </div>
                        </div>
                        <button className="btn bg-black border-black text-white hover:text-black px-8">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* Newsletter  */}
            <div>
                <div className="hero shadow-xl my-4  w-full" >
                    <div className=" lg:flex  lg:justify-around" >
                        <img src={pic1} className="lg:w-1/3  rounded-2xl h-80"  />
                        <div className="py-2 px-4 mt-12">
                            <h1 className="md:text-4xl text-2xl font-bold mb-4">Subscribe For Online Shopping Update</h1>
                            <p className="">Provident cupiditate voluptatem et in. Quaerat <br /> fugiat ut assumenda excepturi exercitationem quasi. </p>

                            <label className="input input-bordered flex items-center gap-2 md:w-96 mt-6">
                                <input type="text" className="grow" placeholder="Enter your email here" />
                                <span className="badge bg-black text-white  px-4 py-3">Subscribe</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;