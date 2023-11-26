import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from "../hooks/UseAxios";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import swal from "sweetalert";
const Cheakout = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axios = UseAxios();
  const { user } = useAuth();
  const [cartItems] = useCart();
  const totalPrice = cartItems?.reduce(
    (prev, current) => prev + current.price,
    0
  );

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if(totalPrice <= 0){
      return
    }
    if (totalPrice > 0) {
      axios
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axios, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setError("");
    }

    // confirm cardpayment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || null,
            email: user?.email || null,
          },
        },
      });
    if (confirmError) {
      console.log("confirme error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transection id", paymentIntent.id);
        const payment = {
          email: user?.email,
          price: totalPrice,
          transectionId: paymentIntent.id,
          date: new Date(),
          itemId: cartItems?.map((item) => item._id),
          status: "pending",
        };

        const res = await axios.post("/save-payment-details", payment);
        console.log(res.data);
        if (res.data?.insertedId) {
          swal("Congrats", "Your payment Successfull", "success");
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",

                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-success w-full mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500 mt-3 text-xs">{error}</p>
      </form>
    </div>
  );
};

export default Cheakout;
