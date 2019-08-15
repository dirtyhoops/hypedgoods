import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './ShoeInfo.css';

const ShoeInfo = props => {
  const {
    _id,
    brand,
    name,
    release_date,
    retail_price,
    colorway,
    images
  } = props.selectedShoe;

  const [shoePrice, setShoePrice] = useState(retail_price);
  const [variant_id, setVariant_id] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [disableAddToCartButton, setDisableAddToCartButton] = useState(true);
  const [buttonText, setButtonText] = useState('select size');

  const changePrice = (price, variant_id, variant_size) => {
    setShoePrice(price);
    setVariant_id(variant_id);
    setShoeSize(variant_size);
    setDisableAddToCartButton(false);
    setButtonText(`add size  ${variant_size} to cart`);
  };

  // RIGHT NOW JUST SAVE THE VARIANTID, BUT LATER TRY TO MAKE AN OBJECT OUT OF  ALL THE DATA(SHOE ID, BRAND, NAME, SHOE PORICE, SHOE SIZE, ETC)
  const addCart = variantid => {
    //the array that holds the objects(items)
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

    var myItem = {
      variant_id: variantid,
      shoe_id: _id,
      shoe_size: shoeSize,
      shoe_price: shoePrice,
      shoe_order_quantity: 1,
      shoe_brand: brand,
      shoe_name: name,
      shoe_colorway: colorway,
      shoe_image: images[0]
    };

    oldItems.push(myItem);

    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
  };

  return (
    <div className='wrapper-shoe-info'>
      <div className='product-info'>
        <h1 className='product-info-brand'>{brand}</h1>
        <p className='product-info-name'>{name}</p>
        <p className='product-info-p'>
          release date:{' '}
          <span>
            <Moment format='YYYY/MM/DD'>{release_date}</Moment>
          </span>
        </p>
        <p className='product-info-p'>
          retail price: <span>${retail_price}</span>
        </p>
        {colorway && (
          <p className='product-info-p'>
            colorway: <span>{colorway}</span>
          </p>
        )}

        <h1 className='product-info-price'>${shoePrice}</h1>
      </div>
      <div className='product-sizes'>
        <p className='product-info-p'>Available Sizes (us men size)</p>
        <div className='product-sizes-buttons'>
          <div className='button-size-container'>
            {props.selectedShoeVariants ? (
              props.selectedShoeVariants.map((shoevariant, index) => (
                <div
                  key={index}
                  className='button-size'
                  data-value={shoevariant.size}
                  onClick={() =>
                    changePrice(
                      shoevariant.price,
                      shoevariant._id,
                      shoevariant.size
                    )
                  }
                >
                  {shoevariant.size}
                </div>
              ))
            ) : (
              <p>SOLD OUT</p>
            )}
          </div>
        </div>
        <button
          className='button-addtocart btn btn-secondary btn-block btn-sm'
          onClick={() => addCart(variant_id)}
          disabled={disableAddToCartButton}
        >
          {buttonText}
        </button>
        {props.isAdmin ? (
          <>
            <Link to={`/products/shoes/${_id}/variants`}>
              <button className='btn btn-primary btn-block btn-sm'>
                Edit/Add a Size
              </button>
            </Link>
            <button className='btn btn-danger btn-block btn-sm'>
              Delete Shoes
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ShoeInfo;
