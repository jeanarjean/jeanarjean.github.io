import React from 'react';
import ConnectedAddToCartButton from './addToCartButton';
import './index.scss';

const prices = [20, 30, 40]

const StoreItem = ({item}) => {
  const [value, setValue] = React.useState("0");

  let rightMarginClassName = 'poster-right-margin';
  let leftMarginClassName = 'poster-left-margin';
  if (item?.orientation == "horizontal") {
    rightMarginClassName = 'poster-right-margin-horizontal';
    leftMarginClassName = 'poster-left-margin-horizontal';
  }
  
  return (
    <div className="poster-container">
      <div className={leftMarginClassName}></div>
      <div className="poster-image-container">
        <a href={item?.imagePath}>
          <h1 className="print-title">{item?.title}</h1>
          <img src={item?.imagePath} className="poster-image" />
        </a>
      </div>
      <div className="poster-description-container">
        <div className="poster-description-text-container">
          <div className="poster-description-text">{item?.description}</div>
          <br />
          <div className="poster-description-additional-information">Premium Matte Print</div>
          <div className="poster-description-additional-information">Canada Only</div>
          <div className="poster-description-additional-information">{prices[value]}.00$</div>
          <div className="poster-description-additional-information">3 to 5 days shipping</div>

          <div className="poster-description-additional-information">
            <select value={value} onChange={e => setValue(e.currentTarget.value)}>
              <option value={0}>8x12</option>
              <option value={1}>12x18</option>
              <option value={2}>24x36</option>
            </select>
          </div>
          <div className="buy-button-container">
            <ConnectedAddToCartButton item={item} size={value}/>
          </div>
        </div>
      </div>
      <div className={rightMarginClassName}></div>
    </div>)
}

export default StoreItem