
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        if (plan === 'premium' ) {
            navigate('/payment');
        } else {
            alert("Free Plan Subscribed !");
        }
    };

    return (
        <div className="pricing-page">
            <h1 className="pricing-title">Choose Your Plan</h1>
            <div className="plan-card">
                <h2>Free Plan</h2>
                <p>Basic access with limited features.</p>
                <button 
                    className="select-button"
                    onClick={() => handleSelectPlan('free')}
                >
                    Select Free Plan
                </button>
            </div>
            <div className="plan-card">
                <h2>Premium Plan($1/month)</h2>
                <p>Get access to more features</p>
                <button 
                    className="select-button premium-button"
                    onClick={() => handleSelectPlan('premium')}
                >
                    Select Premium Plan
                </button>
            </div>

            
        </div>
    );
};

export default Pricing;
