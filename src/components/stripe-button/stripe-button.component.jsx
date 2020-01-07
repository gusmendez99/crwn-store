import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_PMYhDe8Doo73rLLNUT6HDiGj00nyTaH9EL';

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='PrimeShop GT'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )

}

export default StripeCheckoutButton