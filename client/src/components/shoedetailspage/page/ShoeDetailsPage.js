import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoe } from '../../../actions/shoe';

import ShoeImages from '../ShoeImages/ShoeImages';
import ShoeInfo from '../ShoeInfo/ShoeInfo';
import RelatedShoes from '../RelatedShoes/RelatedShoes';

import './ShoeDetailsPage.css';

const ShoeDetailsPage = ({
  match: {
    params: { id }
  },
  getShoe
}) => {
  // gets the selected shoes and loads the data to this page
  useEffect(() => {
    getShoe(id);
  }, []);

  // Scrolls the window all the way to top every time this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='wrapper-shoedetails'>
        <ShoeImages />
        <ShoeInfo />
        <RelatedShoes />
      </div>
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
