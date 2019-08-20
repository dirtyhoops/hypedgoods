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

  const [toggleFilterArrowBrand, setToggleFilterArrowBrand] = useState(false);
  const [toggleFilterArrowModel, setToggleFilterArrowModel] = useState(false);
  const [toggleFilterArrowPrice, setToggleFilterArrowPrice] = useState(false);
  const [toggleFilterArrowSize, setToggleFilterArrowSize] = useState(false);
  const [toggleFilterArrowYear, setToggleFilterArrowYear] = useState(false);

  const shoesPerPageNumber = [30, 60, 90];

  const toggle = () => {
    toggleFilter ? setToggleFilter(false) : setToggleFilter(true);
  };

  const toggleArrowBrand = () => {
    toggleFilterArrowBrand
      ? setToggleFilterArrowBrand(false)
      : setToggleFilterArrowBrand(true);
  };

  const toggleArrowModel = () => {
    toggleFilterArrowModel
      ? setToggleFilterArrowModel(false)
      : setToggleFilterArrowModel(true);
  };

  const toggleArrowPrice = () => {
    toggleFilterArrowPrice
      ? setToggleFilterArrowPrice(false)
      : setToggleFilterArrowPrice(true);
  };

  const toggleArrowSize = () => {
    toggleFilterArrowSize
      ? setToggleFilterArrowSize(false)
      : setToggleFilterArrowSize(true);
  };

  const toggleArrowYear = () => {
    toggleFilterArrowYear
      ? setToggleFilterArrowYear(false)
      : setToggleFilterArrowYear(true);
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
          Sort by:{' '}
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
            <div className='found-item-container'>
              <p>{shoes.length} items found</p>
            </div>
            <div className='filter-refineby'>refine by</div>
            {/* <h5>filter content goes here</h5> */}

            {/* FOR BRAND FILTER */}
            <div
              className='filter-brand filter-container'
              onClick={toggleArrowBrand}
            >
              <div className='filter-options-container'>
                <p>brand</p>
                <p>
                  {toggleFilterArrowBrand ? (
                    <i className='fa fa-angle-up' />
                  ) : (
                    <i className='fa fa-angle-down' />
                  )}
                </p>
              </div>
              {/* hides it at first and then it pops out when brand is chosen */}
              <div
                className={
                  'filter-brand-options ' +
                  (toggleFilterArrowBrand ? 'filter-show' : 'filter-hide')
                }
              >
                BRAND OPTIONS FITS HERE
              </div>
            </div>

            {/* FOR MODEL FILTER */}
            <div
              className='filter-model filter-container'
              onClick={toggleArrowModel}
            >
              <div className='filter-options-container'>
                <p>model</p>
                <p>
                  {toggleFilterArrowModel ? (
                    <i className='fa fa-angle-up' />
                  ) : (
                    <i className='fa fa-angle-down' />
                  )}
                </p>
              </div>
              <div
                className={
                  'filter-model-options ' +
                  (toggleFilterArrowModel ? 'filter-show' : 'filter-hide')
                }
              >
                MODEL OPTIONS FITS HERE
              </div>
            </div>

            {/* FOR PRICE FILTER */}
            <div
              className='filter-price filter-container'
              onClick={toggleArrowPrice}
            >
              <div className='filter-options-container'>
                <p>price</p>
                <p>
                  {toggleFilterArrowPrice ? (
                    <i className='fa fa-angle-up' />
                  ) : (
                    <i className='fa fa-angle-down' />
                  )}
                </p>
              </div>
              <div
                className={
                  'filter-price-options ' +
                  (toggleFilterArrowPrice ? 'filter-show' : 'filter-hide')
                }
              >
                PRICE OPTIONS FITS HERE
              </div>
            </div>

            {/* FOR SIZE FILTER */}
            <div
              className='filter-size filter-container'
              onClick={toggleArrowSize}
            >
              <div className='filter-options-container'>
                <p>size</p>
                <p>
                  {toggleFilterArrowSize ? (
                    <i className='fa fa-angle-up' />
                  ) : (
                    <i className='fa fa-angle-down' />
                  )}
                </p>
              </div>
              <div
                className={
                  'filter-size-options ' +
                  (toggleFilterArrowSize ? 'filter-show' : 'filter-hide')
                }
              >
                SIZE OPTIONS FITS HERE
              </div>
            </div>

            {/* FOR YEAR FILTER */}
            <div
              className='filter-year filter-container'
              onClick={toggleArrowYear}
            >
              <div className='filter-options-container'>
                <p>year</p>
                <p>
                  {toggleFilterArrowYear ? (
                    <i className='fa fa-angle-up' />
                  ) : (
                    <i className='fa fa-angle-down' />
                  )}
                </p>
              </div>
              <div
                className={
                  'filter-year-options ' +
                  (toggleFilterArrowYear ? 'filter-show' : 'filter-hide')
                }
              >
                YEAR OPTIONS FITS HERE
              </div>
            </div>
          </div>

          {/* FOR MOBILE FILTER */}
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
