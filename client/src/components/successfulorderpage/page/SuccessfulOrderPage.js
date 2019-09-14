import React from 'react';
import { Schema } from 'mongoose';
import { arrayExpression } from '@babel/types';
import { totalmem } from 'os';

const SuccessfulOrderPage = () => {
  return (
    <div>
      <p>YOUR ORDER IS SUCCESSFUL</p>
    </div>
  );
};

export default SuccessfulOrderPage;

// @ Todo:
// 1. get checkout from redux.
// 2. make an Order Schema, with shippingaddress, billingaddress, customerinfo(email, firstname, lastname, phone), and ITEMS, with totalmem, tax, shipping, subtotal.
// 3. save everything and then have a loop that loops to add the variant ID inside tthe item array.
// 4. create a PUT route that edit the variant of the item with the id from the order. deduct a quantity from the variant and then deduct it from the total count of the shoes.
// 5. if the variant is the last size, make sure to delete it.
// 6. then delete the local storage of the cart.after that
// 7. display a quick summary of the order with all the order details.
