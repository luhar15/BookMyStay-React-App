import React, { useState } from 'react';
import Select from 'react-select';
import { AiFillCreditCard, AiFillBank, AiFillDollarCircle, AiOutlineArrowRight } from 'react-icons/ai';
import './payment.css';
import Header from "./Header";
import Footer from "./Footer";

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = [
    { value: 'card', label: 'Credit/Debit Card', icon: <AiFillCreditCard /> },
    { value: 'upi', label: 'UPI', icon: <AiFillDollarCircle /> },
    { value: 'cod', label: 'Cash on Delivery', icon: <AiOutlineArrowRight /> },
    { value: 'netbanking', label: 'Net Banking', icon: <AiFillBank /> },
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing and validation based on selectedPaymentMethod
  };

  return (
    <div>
        <Header/>
      <div className="color" >
    <form className="payment-form" onSubmit={handlePayment}>
      <h2>Select Payment Method</h2>
      <Select
        options={paymentMethods}
        value={selectedPaymentMethod}
        onChange={(selectedOption) => setSelectedPaymentMethod(selectedOption)}
        isSearchable={false}
      />

      {selectedPaymentMethod && (
        <div className="payment-details">
          <div className="payment-icon">{selectedPaymentMethod.icon}</div>
          <div className="payment-text">{selectedPaymentMethod.label}</div>
        </div>
      )}

      {selectedPaymentMethod && selectedPaymentMethod.value === 'card' && (
        <div className="card-details">
          {/* Implement credit/debit card payment form */}
        </div>
      )}

      {selectedPaymentMethod && selectedPaymentMethod.value === 'upi' && (
        <div className="upi-details">
          {/* Implement UPI payment form */}
        </div>
      )}

      {selectedPaymentMethod && selectedPaymentMethod.value === 'netbanking' && (
        <div className="netbanking-details">
          {/* Implement net banking payment form */}
        </div>
      )}
      <button type="submit" disabled={!selectedPaymentMethod}>
        Proceed to Pay
      </button>
    </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Payment;