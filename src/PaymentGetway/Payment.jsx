import SectionTitle from "../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cheakout from "./Cheakout";

const stripePromise = loadStripe(import.meta.env.VITE_APP_PAYMENTGATEWAY);

const Payment = () => {
  return (
    <div>
      <SectionTitle subHeading={"Payment"} heading={"Cheakout"}></SectionTitle>
      <Elements stripe={stripePromise}>
        <Cheakout></Cheakout>
      </Elements>
    </div>
  );
};

export default Payment;
