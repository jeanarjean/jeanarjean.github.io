import { loadStripe } from '@stripe/stripe-js'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import './cart.scss'

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PK_TEST)
  }
  return stripePromise
}


const CheckoutButton = ({ itemsInCart }) => {
  var shipping = process.env.SHIPPING;
  const lineItems = Object.keys(itemsInCart).map((item) => { return { price: itemsInCart[item].itemId, quantity: itemsInCart[item].quantity } })
  lineItems.push({price: shipping, quantity: 1})
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      billingAddressCollection: "required",
      shippingAddressCollection: {
        allowedCountries: ['CA'],
      },
      lineItems: lineItems,
      successUrl: `${process.env.WEBSITE_URL}/store/success/`,
      cancelUrl: `${process.env.WEBSITE_URL}/store`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <button
      disabled={loading}
      className="checkout-button"
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Buy
    </button>
  )
}

CheckoutButton.propTypes = {
  itemsInCart: PropTypes.object.isRequired
}

const mapStateToProps = ({ itemsInCart: itemsInCart }) => {
  return { itemsInCart };
}

const ConnectedCheckoutButton = connect(mapStateToProps)(CheckoutButton)

export default ConnectedCheckoutButton
