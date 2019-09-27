import React from 'react';

const CheckoutCrumbs = props => {
  const { currentForm } = props;
  return (
    <div className='checkout-crumbs'>
      <p>
        <span>cart</span> >{' '}
        <span
          className={currentForm === 'shippingform' ? 'crumbs-bold' : undefined}
        >
          information
        </span>{' '}
        >{' '}
        <span
          className={
            currentForm === 'shippingoption' ? 'crumbs-bold' : undefined
          }
        >
          shipping
        </span>{' '}
        >{' '}
        <span
          className={currentForm === 'billingform' ? 'crumbs-bold' : undefined}
        >
          payment
        </span>
      </p>
    </div>
  );
};

export default CheckoutCrumbs;
