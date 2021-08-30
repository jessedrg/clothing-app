import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price})=>{
    const priceForStripe = price*100;
    const oToken = token =>{
        console.log(token)
    }
    const publishedKey = "pk_test_51JU5r1IFZb7iT29rfrNQqma3OENWEBRPaaMzs4aJ64zFBoUvissuQkkruZipHrnrdgVWtwD2iINttrAcCadzgWFM00WuPAdNtm"
    return (
        <StripeCheckout label='Pay now' name='Clothing shop' billingAddress shippingAddress description={`your total is ${price}`} amount={priceForStripe} panelLabel='Pay now' token={oToken(publishedKey)}/>
    )
}



export default StripeButton