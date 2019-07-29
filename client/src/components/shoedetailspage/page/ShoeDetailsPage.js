import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoe } from '../../../actions/shoe';

import ShoeImages from '../ShoeImages/ShoeImages';
import ShoeInfo from '../ShoeInfo/ShoeInfo';

import './ShoeDetailsPage.css';

const ShoeDetailsPage = ({
  match: {
    params: { id }
  },
  getShoe
}) => {
  useEffect(() => {
    getShoe(id);
  }, []);

  // const {
  //   brand,
  //   name,
  //   product_id,
  //   release_date,
  //   colorway,
  //   colors,
  //   categories,
  //   images,
  //   retail_price
  // } = selectedShoe;

  return (
    <Fragment>
      <section className='container'>
        <div className='wrapper-shoedetails'>
          <ShoeImages />
          <ShoeInfo />
        </div>
      </section>
    </Fragment>
  );
};

ShoeDetailsPage.propTypes = {
  getShoe: PropTypes.func.isRequired
};

export default connect(
  null,
  { getShoe }
)(ShoeDetailsPage);
