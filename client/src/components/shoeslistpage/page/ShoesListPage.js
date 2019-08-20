import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoes } from '../../../actions/shoe';
import { updateShoesPerPage } from '../../../actions/cartAndFilter';
import ShoesListGrid from '../ShoesListGrid/ShoesListGrid';
import Spinner from '../../layout/Spinner/Spinner';

import './ShoesListPage.css';

const ShoesListPage = ({
  updateShoesPerPage,
  getShoes,
  shoes,
  shoesPerPage
}) => {
  useEffect(() => {
    getShoes();
  }, []);

  const [toggleFilter, setToggleFilter] = useState(false);

  const shoesPerPageNumber = [30, 60, 90];

  const toggle = () => {
    toggleFilter ? setToggleFilter(false) : setToggleFilter(true);
  };

  const changeShoesPerPage = shoesperpage => {
    updateShoesPerPage(shoesperpage);
  };

  return (
    <div className='wrapper-shoelistpage'>
      <div className='header-shoelistpage'>
        <h1>all the sneakers</h1>
      </div>
      {/* maybe takeout container-sorting-options later */}
      <div className='container-sorting-options'>
        <div className='sorting-left'>
          <p>
            View{' '}
            {shoesPerPageNumber.map(shoesperpage => (
              <span
                className={
                  shoesperpage === shoesPerPage && 'shoesperpage-selected'
                }
                key={shoesperpage}
                onClick={() => changeShoesPerPage(shoesperpage)}
              >
                {shoesperpage}{' '}
              </span>
            ))}
          </p>
        </div>
        <div className='sorting-right'>
          Sort by:
          <select>
            <option value='bestseller'>BEST SELLER</option>
            <option value='pricehigh'>PRICE HIGH</option>
            <option value='pricelow'>PRICE LOW</option>
            <option value='releasenew'>RELEASE NEW</option>
            <option value='releaseold'>RELEASE OLD</option>
          </select>
        </div>
      </div>
      <div className='container-shoes-list'>
        <div className='shoes-list-filter'>
          <div className='shoes-list-filter-content'>
            <h5>filter content goes here</h5>
          </div>
          {toggleFilter ? (
            <div className='shoes-list-filter-content-mobile'>
              <h5>filter content goes here</h5>
            </div>
          ) : null}

          <div className='show-filter-button'>
            <button className='btn btn-block btn-sm btn-dark' onClick={toggle}>
              {toggleFilter ? <>Hide Filter</> : <>Show Filter</>}
            </button>
          </div>
        </div>
        {shoes.length > 0 ? <ShoesListGrid shoes={shoes} /> : <Spinner />}
      </div>
    </div>
  );
};

ShoesListPage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  updateShoesPerPage: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes,
  shoesPerPage: state.cartAndFilter.shoesPerPage
});

export default connect(
  mapStateToProps,
  { getShoes, updateShoesPerPage }
)(ShoesListPage);
