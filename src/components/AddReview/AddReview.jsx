// import  { useContext } from 'react';
// import toast from 'react-hot-toast';
// import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider';
// import useTitle from './../../hooks/useTitle';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import Swal from "sweetalert2";

const AddReview = () => {
    // useTitle('Add Review')
    const { productName, _id } = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log('addreview', _id, productName)


    const handleClientReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form?.name.value;
        const email = user?.email || 'unregistered';
        const image = form.image.value;
        const myDate = form.myDate.value;
        const message = form.message.value;
        console.log(name, email, image, message)

        const review = {
            prodId: _id,
            productName: productName,
            user: name,
            image,
            email,
            myDate,
            message
        }

        fetch('https://e-commerce-server-side-ashen.vercel.app/reviews', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: "top-middle",
                        icon: "success",
                        title: `Thank u for the review.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(data)
                event.target.reset()
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10 
  '>Please Add an Honest Review For <span className='text-orange-500'>{productName}</span> </h1>

            <form onSubmit={handleClientReview}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-slate-300'>

                    <input type="text" name='name' placeholder='Your Name' className="input input-bordered  w-full"  />

                    <input type="text" name='image' placeholder='Your ImageUrl' className="input input-bordered  w-full" />

                    <input type="text" name='email' placeholder='Email' className="input input-bordered  w-full" defaultValue={user?.email} readOnly />

                    <input type="date" name='myDate' placeholder='' className="input input-bordered  w-full" />

                    <textarea className="textarea " name='message' placeholder="Your Message"></textarea>

                </div>

                <div className='my-3 text-center'>
                    <input type="submit" value='Submit' className="btn btn-active btn-primary w-40 px-10 " />
                </div>
            </form>
        </div>
    );
};

export default AddReview;