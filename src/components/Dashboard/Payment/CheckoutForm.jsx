import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useProduct from "../../../hooks/useProduct";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log('clientSecret', clientSecret)
    const { user } = useContext(AuthContext)
    console.log('user', user.email)
    const [carts] = useCart()
    const totalPrice = carts.reduce((total, product) => total + product.price, 0)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, totalPrice])


    console.log('totalPrice', totalPrice)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return; // You can also render an error message or fallback UI
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })


        if (error) {
            console.log('paymentError', error)
            setError(error.message);
        }
        else {

            console.log('Payment Method:', paymentMethod);
            setError('');
        }



        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('Confirm Error:', confirmError);
        }
        else {
            console.log('PaymentIntent:', paymentIntent);

            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                //now save thr payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId:paymentIntent.id,
                    date: new Date(), //utc date convert
                    cartIds: carts.map(item => item._id),
                    productIds: carts.map(item => item.proId),
                    status:'pending'
                }
             const res  =await axiosSecure.post('/payments',payment)
                console.log('res',res.data)
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-middle",
                        icon: "success",
                        title: `Thank you for the Payment`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }
    }


    return (
        <div className="">
            <form className="w-96 border-t-2 border-orange-600 shadow-lg  p-2 " onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#1c1701',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div className="mt-10 text-center  flex justify-center">
                    <button type="submit" className="btn btn-warning bg-orange-500 mt-5 hover:bg-orange-800  text-white py-1 rounded-md px-7"  >
                        Pay
                    </button>
                </div>

            </form>
            <p className="text-red-600 mt-4 ms-2">{error}</p>
            {transactionId && <p className=" mt-4 ms-2">Your Transaction id :<span className="text-green-600 font-semibold"> {transactionId}</span></p>
            }
        </div>
    );
};

export default CheckoutForm;
