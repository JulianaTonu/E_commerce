import Hero from "./Hero";
import Popular from "./PopularProduct/Popular";
import pic from '../../assets/offer1.jpg'
import pic1 from '../../assets/newsletter.png'
import { useEffect, useState } from "react";

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}
const Home = () => {
    const [countdown, setCountdown] = useState({ days: 10, hours: 9, minutes: 3, seconds: 0 });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown(prevCountdown => {
                let { days, hours, minutes, seconds } = prevCountdown;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                        if (hours < 0) {
                            hours = 23;
                            days--;
                            if (days < 0) {
                                clearInterval(countdownInterval);
                                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);
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


                        <div className=" md:w-1/2 flex gap-5 my-7">
                            <div className="bg-white p-3 pt-4 text-center rounded-lg font-serif text-2xl">
                                <span className="countdown font-mono text-4xl ">{padZero(countdown.days)}</span>
                                <p>days</p>
                            </div>
                            <div className="bg-white p-2 pt-4 text-center rounded-lg font-serif text-2xl">
                                <span className="countdown font-mono text-4xl ">{padZero(countdown.hours)}</span>
                                <p>hours</p>
                            </div>
                            <div className="bg-white p-4 text-center rounded-lg font-serif text-2xl">
                                <span className="countdown font-mono text-4xl ">{padZero(countdown.minutes)}</span>
                                <p>min</p>
                            </div>
                            <div className="bg-white p-4 text-center rounded-lg font-serif text-2xl">
                                <span className="countdown font-mono text-4xl ">{padZero(countdown.seconds)}</span>
                                <p>sec</p>
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
                        <img src={pic1} className="lg:w-1/3  rounded-2xl h-80" />
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