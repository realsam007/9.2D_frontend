import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css'; 

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage(null);
      console.log('Payment Method:', paymentMethod);
   
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h1>Payment Page</h1>
      <div className="card-element">
        <CardElement />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button type="submit" className="payment-button" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default Payment;
