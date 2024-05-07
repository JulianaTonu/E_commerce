import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useProduct from "../../../hooks/useProduct";

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log('clientSecret', clientSecret)
    const [products] = useProduct()
    const totalPrice = products.reduce((total, product) => total + product.newPrice, 0)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {           
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, totalPrice])



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
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('paymentMethod', paymentMethod)
            setError('')
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
                {/* disabled={!stripe} */}
                <div className="mt-10 text-center  flex justify-center">
                    <button disabled={!stripe || clientSecret} className="bg-orange-500 mt-5 hover:bg-orange-800  text-white py-1 rounded-md px-7" type="submit" >
                        Pay
                    </button>
                </div>

            </form>
            <p className="text-red-600 mt-4 ms-2">{error}</p>
        </div>
    );
};

export default CheckoutForm;
