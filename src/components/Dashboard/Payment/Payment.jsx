import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)
console.log('stripePromise', stripePromise)
const Payment = () => {
    return (
        <div className=" ">
            <h1 className="font-bold text-3xl mb-7">Payment</h1>

            <div className="">
                <Elements stripe={stripePromise} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;