import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoe } from '../../../actions/shoe';

import ShoeImages from '../ShoeImages/ShoeImages';
import ShoeInfo from '../ShoeInfo/ShoeInfo';
import RelatedShoes from '../RelatedShoes/RelatedShoes';

import './ShoeDetailsPage.css';

const ShoeDetailsPage = ({
  getShoe,
  match: {
    params: { id }
  },
  shoe: { selectedShoe, loadingSelectedShoe }
}) => {
  // gets the selected shoes and loads the data to this page
  useEffect(() => {
    selectShoe(id);
  }, []);

  const selectShoe = id => {
    getShoe(id);
    window.scrollTo(0, 0);
  };

  return selectedShoe === null ? (
    <p>PAGEEEEEEEEEEE IS LOADINGGGGGG </p>
  ) : (
    <Fragment>
      <div className='wrapper-shoedetails'>
        <ShoeImages images={selectedShoe.images} />
        <ShoeInfo selectedShoe={selectedShoe} />
        <RelatedShoes click={selectShoe} shoeBrand={selectedShoe.brand} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  shoe: state.shoe
});

ShoeDetailsPage.propTypes = {
  getShoe: PropTypes.func.isRequired,
  shoe: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getShoe }
)(ShoeDetailsPage);
