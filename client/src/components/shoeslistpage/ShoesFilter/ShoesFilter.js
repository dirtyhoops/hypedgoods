import React, { useState, useEffect } from 'react';
import './ShoesFilter.css';

const ShoesFilter = props => {
  useEffect(() => {
    checkWindowWidth();
  }, []);

  const { filteredItems, filterProductsByBrands, shoes } = props;
  const [toggleFilter, setToggleFilter] = useState(false);

  const [toggleFilterArrowBrand, setToggleFilterArrowBrand] = useState(true);
  const [toggleFilterArrowModel, setToggleFilterArrowModel] = useState(false);
  const [toggleFilterArrowPrice, setToggleFilterArrowPrice] = useState(false);
  const [toggleFilterArrowSize, setToggleFilterArrowSize] = useState(true);

  const [brandNike, setBrandNike] = useState(false);
  const [brandAdidas, setBrandAdidas] = useState(false);
  const [brandAll, setBrandAll] = useState(true);

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

  const checkWindowWidth = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
      setToggleFilter(true);
    }
  };

  const brandHandler = brand => {
    filterProductsByBrands(shoes, brand);
    if (brand === '') {
      setBrandNike(false);
      setBrandAdidas(false);
      setBrandAll(true);
    }

    if (brand === 'nike') {
      setBrandNike(true);
      setBrandAdidas(false);
      setBrandAll(false);
    }

    if (brand === 'adidas') {
      setBrandAdidas(true);
      setBrandNike(false);
      setBrandAll(false);
    }
  };

  return (
    <div className='wrapper-shoes-list-filter'>
      <div className='show-filter-button'>
        <button className='btn btn-block btn-sm btn-dark' onClick={toggle}>
          {toggleFilter ? (
            <>Hide Filter ({filteredItems.length} products)</>
          ) : (
            <>Show Filter ({filteredItems.length} products)</>
          )}
        </button>
      </div>
      {toggleFilter ? (
        <div className='shoes-list-filter-content shoes-list-filter-mobile-animate'>
          <div className='found-item-container'>
            <p>{filteredItems.length} items found</p>
          </div>

          <div className='filter-refineby'>refine by</div>
          {/* <h5>filter content goes here</h5> */}

          {/* FOR BRAND FILTER */}
          <div className='filter-container'>
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
                'filter-options ' +
                (toggleFilterArrowBrand ? 'filter-show' : 'filter-hide')
              }
            >
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  checked={brandAll}
                />
                <label
                  className='custom-control-label'
                  htmlFor='customCheckDisabled'
                  onClick={() => brandHandler('')}
                >
                  All Brands
                </label>
              </div>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  checked={brandNike}
                />
                <label
                  className='custom-control-label'
                  htmlFor='customCheckDisabled'
                  onClick={() => brandHandler('nike')}
                >
                  nike
                </label>
              </div>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  checked={brandAdidas}
                />
                <label
                  className='custom-control-label'
                  htmlFor='customCheckDisabled'
                  onClick={() => brandHandler('adidas')}
                >
                  adidas
                </label>
              </div>
              {/* <div className='custom-control custom-checkbox'>
                <input type='checkbox' className='custom-control-input' />
                <label
                  className='custom-control-label'
                  htmlFor='customCheckDisabled'
                  onClick={() => filterProductsByBrands(shoes, 'puma')}
                >
                  puma
                </label>
              </div> */}
            </div>
          </div>
          {/* FOR PRICE FILTER */}
          {/* <div className='filter-container'>
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
          </div> */}

          {/* FOR SIZE FILTER */}
          <div className='filter-container'>
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
              <ul className='size-filter-ul'>
                <li>4</li>
                <li>4.5</li>
                <li>5</li>
                <li>5.5</li>
                <li>6</li>
                <li>6.5</li>
                <li>7</li>
                <li>7.5</li>
                <li>8</li>
                <li>8.5</li>
                <li>9</li>
                <li>9.5</li>
                <li>10</li>
                <li>10.5</li>
                <li>11</li>
                <li>11.5</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      {/* FOR MOBILE FILTER */}
      {/* <div className='show-filter-button'>
        <button className='btn btn-block btn-sm btn-dark' onClick={toggle}>
          {toggleFilter ? (
            <>Hide Filter ({filteredItems.length} products)</>
          ) : (
            <>Show Filter ({filteredItems.length} products)</>
          )}
        </button>
      </div> */}
      {/* {toggleFilter ? (
        <div className='shoes-list-filter-content-mobile'>
          <h5>filter content goes here</h5>
        </div>
      ) : null} */}
    </div>
  );
};

export default ShoesFilter;
