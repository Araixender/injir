import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import UploadLogo from './UploadLogo';
import AddressForm from '../components/AddressForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_API}`);

export default function Checkout() {
    let r = Array(2 + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, 55)
    const url = window.location.href.slice(0, -8)
    const handleSubmit = async () => {
        localStorage.setItem('auth', r)
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: `${import.meta.env.VITE_PRICE_ID}`,
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: `${url}success?auth=${r}`,
            cancelUrl: `${url}cancel`,
        });
        console.log(error)
    }
    return (
        <div>
            <div>
                <AddressForm checkoutFunc={handleSubmit}/>
            </div>
        </div>
    )
}
