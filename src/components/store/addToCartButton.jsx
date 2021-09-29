import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const buttonStyles = {
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  letterSpacing: "1.5px",
}
const sizes = ["8x12", "12x18", "24x36"]
const prices = [20, 30, 40]

const AddToCartButton = ({item, size, addToCart}) => {
  return <div>
    <button className="add-to-cart-button" style={buttonStyles} onClick={() => addToCart(item,size)}>Add To Cart</button>
  </div>
}

AddToCartButton.propTypes = {
  item: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = ({}, ownProps) => {
  const { item, size } = ownProps;
  return { item, size};
}

const mapDispatchToProps = dispatch => {
  return { addToCart: (item, size) => {
    var itemToSend = {...item, itemId: item.itemIds[size], price: prices[size]}
    return dispatch({ type: `ADD_TO_CART`, item: itemToSend, size: sizes[size] }) 
  }}
}

const ConnectedAddToCartButton = connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)

export default ConnectedAddToCartButton;