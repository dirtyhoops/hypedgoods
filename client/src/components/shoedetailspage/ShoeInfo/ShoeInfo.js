import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    images,
    total_quantity,
    lowest_price
  } = props.selectedShoe;

  const { deleteShoes } = props;

  const [shoePrice, setShoePrice] = useState(lowest_price);
  const [variant_id, setVariant_id] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [disableAddToCartButton, setDisableAddToCartButton] = useState(true);
  const [buttonText, setButtonText] = useState('select size');
  const [isSoldOut, setIsSoldOut] = useState(true);

  const [selectedSize, setSelectedSize] = useState(5);

  if (total_quantity === 0 && isSoldOut) {
    setIsSoldOut(false);
    setButtonText('SOLD OUT');
  }

  const changePrice = (price, variant_id, variant_size) => {
    setShoePrice(price);
    setVariant_id(variant_id);
    setShoeSize(variant_size);
    setDisableAddToCartButton(false);
    setButtonText(`add size  ${variant_size} to cart`);
    setSelectedSize(variant_size);
  };

  const addCart = variantid => {
    //the array that holds the objects(items)
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

    var myItem = {
      variant_id: variantid,
      shoe_id: _id,
      shoe_size: shoeSize,
      shoe_price: shoePrice,
      shoe_retail_price: retail_price,
      shoe_order_quantity: 1,
      shoe_brand: brand,
      shoe_name: name,
      shoe_colorway: colorway,
      shoe_image: images[0]
    };

    oldItems.push(myItem);

    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    props.updateCartItemCount(oldItems.length);
    props.history.push('/cart');
  };

  return (
    <div className='wrapper-shoe-info'>
      <div className='product-info'>
        <h1 className='product-info-brand'>{brand}</h1>
        <p className='product-info-name'>{name}</p>
        <p className='product-info-p'>
          release date:{' '}
          <span>
            <Moment format='MM/DD/YYYY'>{release_date}</Moment>
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

        {total_quantity === 0 ? (
          <h1 className='product-info-price'>SOLD OUT</h1>
        ) : (
          <h1 className='product-info-price'>
            ${shoePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </h1>
        )}
      </div>
      <div className='product-sizes'>
        <p className='product-info-p'>Available Sizes (us men size)</p>
        <div className='product-sizes-buttons'>
          <div className='button-size-container'>
            {props.selectedShoeVariants ? (
              props.selectedShoeVariants.map(shoevariant => (
                <div
                  key={shoevariant._id}
                  className={
                    'button-size' +
                    (shoevariant.size === selectedSize
                      ? ' button-size-selected'
                      : ' button-size-notselected')
                  }
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
          className='button-shoeinfo-page btn btn-secondary btn-block btn-sm'
          onClick={() => addCart(variant_id)}
          disabled={disableAddToCartButton}
        >
          {buttonText}
        </button>
        {props.isAdmin ? (
          <>
            <Link to={`/products/shoes/${_id}/variants`}>
              <button className='button-shoeinfo-page btn btn-primary btn-block btn-sm'>
                Edit/Add a Size
              </button>
            </Link>
            <button
              className='button-shoeinfo-page btn btn-danger btn-block btn-sm'
              onClick={() => deleteShoes(_id)}
            >
              Delete Shoes
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(ShoeInfo);
