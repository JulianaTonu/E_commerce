import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const WomenDetails = () => {
    const { _id, productName, img, newPrice, oldPrice } = useLoaderData()
    const products = { _id, productName, img, newPrice, oldPrice }
    const {user}= useContext(AuthContext)
    const navigate =useNavigate()
    const location =useLocation()
    const handleAddToCart = product => {
        if(user && user.email){
            //send cart item to the database
            const cartItem ={
                proId:_id,
                email:user.email,
                productName,
                img,
                price:newPrice
            }
            axios.post('http://localhost:5000/carts',cartItem)
            .then(res=>{
                console.log(res.data)
            })
        }

        else{
            Swal.fire({
                title: "Sorry! You are not logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send the user to the login page
                  navigate('/login',{state:{from:location}})
                }
              });
        }
        console.log(product)
    }
    return (
        <div className="md:flex bg-slate-100 mt-4">
            <div className="md:w-10/12 ">
                <img src={img} alt="" className="lg:w-[550px]" />
            </div>
            <div className="md:ms-5 px-5 my-8 pb-8">
                <h1 className=" text-3xl font-bold ">{productName || "Name Not Available"}</h1>
                <p className="my-2 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam deserunt similique perspiciatis omnis saepe
                    cum? Officiis fugit qui similique enim, quidem ad atque
                    voluptas quo pariatur repellat, aut maiores temporibus.</p>

                <div className="flex items-center mt-8 ">
                    <p className="line-through">${oldPrice}</p>
                    <p className="ms-3 font-bold text-4xl text-orange-600">${newPrice}</p>
                </div>

                <div className="mt-10 text-center  flex justify-start ">
                    <button onClick={() => handleAddToCart(products)} className="p-3 rounded-xl shadow-md hover:bg-black text-white font-semibold bg-orange-500 px-8  flex text-center">
                        <span className="flex items-center">Add to cart </span>
                    </button>
                    <button className=" ms-3 p-3 rounded-xl shadow-md  text-white font-semibold bg-black px-10  flex text-center">
                        <span className="flex items-center">Buy now </span>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default WomenDetails;
