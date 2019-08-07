import React from 'react';
import { Link } from 'react-router-dom';
import './ShoeInfo.css';

const ShoeInfo = props => {
  const {
    _id,
    brand,
    name,
    release_date,
    retail_price,
    colorway
  } = props.selectedShoe;

  return (
    <div className='wrapper-shoe-info'>
      <div className='product-info'>
        <h1 className='product-info-brand'>{brand}</h1>
        <p className='product-info-name'>{name}</p>
        <p className='product-info-p'>
          release date: <span>{release_date}</span>
        </p>
        <p className='product-info-p'>
          retail price: <span>${retail_price}</span>
        </p>
        {colorway && (
          <p className='product-info-p'>
            colorway: <span>{colorway}</span>
          </p>
        )}

        <h1 className='product-info-price'>$860.00</h1>
      </div>
      <div className='product-sizes'>
        <p className='product-info-p'>Available Sizes (all sizes in us mens)</p>
        <div className='product-sizes-buttons'>
          <div className='button-size-container'>
            {props.selectedShoeVariants ? (
              props.selectedShoeVariants.map(shoevariant => (
                <div className='button-size' data-value={shoevariant.size}>
                  {shoevariant.size}
                </div>
              ))
            ) : (
              <p>SOLD OUT</p>
            )}
            {/* <div className='button-size' data-value='5'>
              5
            </div> */}
            {/* <div className='button-size' data-value='5.5'>
              5.5
            </div>
            <div className='button-size' data-value='6'>
              6
            </div>
            <div className='button-size' data-value='6.5'>
              6.5
            </div>
            <div className='button-size' data-value='7'>
              7
            </div>
            <div className='button-size' data-value='7.5'>
              7.5
            </div>
            <div className='button-size' data-value='8'>
              8
            </div>
            <div className='button-size' data-value='8.5'>
              8.5
            </div>
            <div className='button-size' data-value='9'>
              9
            </div>
            <div className='button-size' data-value='9.5'>
              9.5
            </div>
            <div className='button-size' data-value='10'>
              10
            </div>
            <div className='button-size' data-value='10.5'>
              10.5
            </div>
            <div className='button-size' data-value='11'>
              11
            </div>
            <div className='button-size' data-value='11.5'>
              11.5
            </div>
            <div className='button-size' data-value='12'>
              12
            </div>
            <div className='button-size' data-value='12.5'>
              12.5
            </div>
            <div className='button-size' data-value='13'>
              13
            </div>
            <div className='button-size' data-value='14'>
              14
            </div> */}
          </div>
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-lg btn-block btn-sm'
        >
          Add to cart
        </button>
      </div>
      {props.isAdmin ? (
        <Link
          to={`/admin/products/shoes/${_id}/variants`}
          type='button'
          className='btn btn-primary btn-lg btn-block btn-sm'
        >
          Edit/Add a Size
        </Link>
      ) : null}
    </div>
  );
};

export default ShoeInfo;
