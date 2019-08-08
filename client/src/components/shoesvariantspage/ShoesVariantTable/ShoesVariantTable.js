import React from 'react';

import './ShoesVariantTable.css';

const ShoesVariantTable = props => {
  const { selectedShoeVariants } = props;
  return (
    <div className='table-variants'>
      <table className='table table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Size</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col' />
          </tr>
        </thead>
        <tbody>
          {selectedShoeVariants.map(variant => (
            <tr>
              <th scope='row'>{variant.size}</th>
              <td>${variant.price}</td>
              <td>{variant.quantity}</td>
              <td>
                <button className='btn btn-primary btn-sm'>Edit</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoesVariantTable;
