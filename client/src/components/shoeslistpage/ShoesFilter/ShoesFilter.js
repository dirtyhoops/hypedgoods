import React, { useState } from 'react';
import './ShoesFilter.css';

const ShoesFilter = props => {
  const { filteredItems } = props;
  const [toggleFilter, setToggleFilter] = useState(false);

  const [toggleFilterArrowBrand, setToggleFilterArrowBrand] = useState(false);
  const [toggleFilterArrowModel, setToggleFilterArrowModel] = useState(false);
  const [toggleFilterArrowPrice, setToggleFilterArrowPrice] = useState(false);
  const [toggleFilterArrowSize, setToggleFilterArrowSize] = useState(false);
  const [toggleFilterArrowYear, setToggleFilterArrowYear] = useState(false);

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
  return (
    <div className='wrapper-shoes-list-filter'>
      <div className='shoes-list-filter-content'>
        <div className='found-item-container'>
          <p>{filteredItems.length} items found</p>
        </div>
        <div className='filter-refineby'>refine by</div>
        {/* <h5>filter content goes here</h5> */}

        {/* FOR BRAND FILTER */}
        <div className='filter-brand filter-container'>
          <div className='filter-options-container'>
            <p>brand</p>
            <button onClick={toggleArrowBrand}>
              {toggleFilterArrowBrand ? (
                <i className='fa fa-angle-up' />
              ) : (
                <i className='fa fa-angle-down' />
              )}
            </button>
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
        <div className='filter-model filter-container'>
          <div className='filter-options-container'>
            <p>model</p>
            <button onClick={toggleArrowModel}>
              {toggleFilterArrowModel ? (
                <i className='fa fa-angle-up' />
              ) : (
                <i className='fa fa-angle-down' />
              )}
            </button>
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
        <div className='filter-price filter-container'>
          <div className='filter-options-container'>
            <p>price</p>
            <button onClick={toggleArrowPrice}>
              {toggleFilterArrowPrice ? (
                <i className='fa fa-angle-up' />
              ) : (
                <i className='fa fa-angle-down' />
              )}
            </button>
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
        <div className='filter-size filter-container'>
          <div className='filter-options-container'>
            <p>size</p>
            <button onClick={toggleArrowSize}>
              {toggleFilterArrowSize ? (
                <i className='fa fa-angle-up' />
              ) : (
                <i className='fa fa-angle-down' />
              )}
            </button>
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
        <div className='filter-year filter-container'>
          <div className='filter-options-container'>
            <p>year</p>
            <button onClick={toggleArrowYear}>
              {toggleFilterArrowYear ? (
                <i className='fa fa-angle-up' />
              ) : (
                <i className='fa fa-angle-down' />
              )}
            </button>
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
  );
};

export default ShoesFilter;
