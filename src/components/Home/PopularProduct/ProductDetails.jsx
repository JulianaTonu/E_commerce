import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const ProductDetails = () => {
    const { _id, productName, img, newPrice, oldPrice,details } = useLoaderData()
    const products = { _id, productName, img, newPrice, oldPrice }
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [reviews, setReviews]=useState([])

    const handleAddToCart = product => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                proId: _id,
                email: user.email,
                productName,
                img,
                price: newPrice,
                qty:1
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // console.log('data', res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-middle",
                            icon: "success",
                            title: `${productName} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }

        else {
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
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        console.log(product)
    }

    useEffect(()=>{

        fetch(`https://e-commerce-server-side-ashen.vercel.app/reviews/product?productName=${productName}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[productName])

 //toast for unregister user
 const handleToast=()=>{
    return Swal.fire({
        position: "top-middle",
        icon: "error",
        title: `Please Login to add Review`,
        showConfirmButton: false,
        timer: 1500
    });
        
        
    }
    return (
<div>
<div className="md:flex bg-slate-100 mt-4">
        <div className="md:w-10/12 ">
            <img src={img} alt="" className="lg:w-[550px]" />
        </div>
        <div className="md:ms-5 px-5 my-8 pb-8">
            <h1 className=" text-3xl font-bold ">{productName || "Name Not Available"}</h1>
            <p className="my-2 text-slate-600">{details} Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                <Link to='/dashboard/dashboard/cart'>
                <button onClick={() => handleAddToCart(products)}  className=" ms-3 p-3 rounded-xl shadow-md  text-white font-semibold bg-black px-10  flex text-center">
                    <span className="flex items-center">Buy now </span>
                </button></Link>
            </div>

        </div>
    </div>

    {/* // Add Review */}
<div className=" text-end my-5"> 
{
          user?.email ?
          <>
          <Link to={`/review/${_id}`}> <button className="btn btn-primary">Add Review</button></Link>
          
          </>
            :
           <>
               <Link to=''> <button onClick={handleToast} className="btn btn-primary disabled:">Add Review</button></Link>
              
                </>
          }


<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-4 text-start'>
{
reviews.map(review=><div key={review._id} className="flex   border-solid border-2 border-orange-600 p-4 rounded-xl m-3">
<div className="avatar">
  <div className="mask mask-squircle w-12 h-12">
    <img src={review.image}  alt=''/>
  </div>
</div>
<div className="ms-4">
  <div className="font-bold">{review.user? review.user : review.email}</div>
  <div className="font-semibold opacity-45">{review.myDate}</div>
  <div className="text-sm opacity-80">{review.message}</div>
  
</div>
</div>)
}
</div>
</div>
</div>
    );
};

export default ProductDetails;