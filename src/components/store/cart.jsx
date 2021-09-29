import PropTypes from "prop-types";
import React from 'react';
import { connect } from "react-redux";
import './cart.scss';
import CheckoutButton from "./checkoutButton";

const Cart = ({ itemsInCart, price, changeQuantity }) => {

  const handleChange = (e, item) => {
    changeQuantity(item, e.target.value)
  };

  const cartItems = Object.keys(itemsInCart).map((key) => {
    var item = itemsInCart[key]
    return <div className="cart-item-container" key={item.itemId}>
      <div className="cart-item-image-container">
        <img src={item.imagePath} className="cart-item-image"></img>
      </div>
      <div className="cart-item-title">
        <div>{item.title}</div>
        <div className="cart-item-title-size">{item.size}</div>
      </div>
      <div className="cart-item-qty-container">
        <select value={item.quantity} onChange={e => handleChange(e, item)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="cart-item-price">
        <span>{item.price},00$ each</span>
      </div>
    </div>
  });

  let cartState;
  if (cartItems.length > 0) {
    cartState = (<div className="cart-checkout-container">
      <div>
        {cartItems}
      </div>
      <div className="cart-finalize-container">
        <div className="cart-checkout-total-title">Total:</div>
        <div className="cart-checkout-price">{price+10},00 $</div>
        <div className="cart-checkout-description">(incl. 10$ flat</div>
        <div className="cart-checkout-description">rate shipping)</div>
        <CheckoutButton />
      </div>
    </div>)
  }
  else {
    cartState = (<p> Your cart is empty! </p>)
  }

  return (
    <div className="cart-container">
      <h1 className="cart-checkout-title">Cart</h1>
      {cartState}
    </div>)
}

Cart.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired
}

const mapStateToProps = ({ itemsInCart, price }) => {
  return { itemsInCart, price };
}

const mapDispatchToProps = dispatch => {
  return { changeQuantity: (item, quantity) => dispatch({ type: `MODIFY_ITEM_QUANTITY`, item, quantity, size: item.size }) }
}

const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default ConnectedCart;