import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Shoe from './Shoe';
import Pagination from '../Pagination/Pagination';

import './ShoesListGrid.css';

const ShoesListGrid = props => {
  const [shoesList, setShoesList] = useState(props.shoes);
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage, setShoesPerPage] = useState(props.shoesPerPage);

  // changes the shoesPerPage whenever the redux state changes
  if (shoesPerPage !== props.shoesPerPage) {
    setShoesPerPage(props.shoesPerPage);
    setCurrentPage(1);
  }

  // Get current shoes
  const indexOfLastShoes = currentPage * shoesPerPage;
  const indexOfFirstShoes = indexOfLastShoes - shoesPerPage;
  const currentShoes = shoesList.slice(indexOfFirstShoes, indexOfLastShoes);

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='shoes-list-grid'>
      <div className='row'>
        {shoesList ? (
          <div className='row'>
            {currentShoes.map(shoe => (
              <Shoe key={shoe._id} shoe={shoe} />
            ))}
          </div>
        ) : null}
      </div>
      <Pagination
        shoesPerPage={shoesPerPage}
        totalShoes={shoesList.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  shoesPerPage: state.cartAndFilter.shoesPerPage
});

export default connect(mapStateToProps)(ShoesListGrid);
