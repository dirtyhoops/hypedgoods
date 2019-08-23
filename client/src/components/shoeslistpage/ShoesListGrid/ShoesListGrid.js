import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Shoe from './Shoe';
import Pagination from '../Pagination/Pagination';
import Spinner from '../../layout/Spinner/Spinner';

import './ShoesListGrid.css';

const ShoesListGrid = props => {
  const { shoesPerPage, shoes, filteredItems } = props;

  const [shoesList, setShoesList] = useState(filteredItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPage, setShoesPage] = useState(shoesPerPage);

  // changes the shoesPerPage whenever the redux state changes
  if (shoesPage !== shoesPerPage) {
    setShoesPage(shoesPerPage);
    setCurrentPage(1);
  }

  // if (filteredItems.length > 0) {
  //   setShoesList(filteredItems);
  //   console.log('setting shoe list with filtered items');
  // }

  // const sortedItems_pricelow = []
  //   .concat(shoesList)
  //   .sort((a, b) => a.lowest_price - b.lowest_price);

  // const sortedItems_pricehigh = []
  //   .concat(shoesList)
  //   .sort((a, b) => b.lowest_price - a.lowest_price);

  // Get current shoes
  const indexOfLastShoes = currentPage * shoesPerPage;
  const indexOfFirstShoes = indexOfLastShoes - shoesPerPage;
  const currentShoes = filteredItems.slice(indexOfFirstShoes, indexOfLastShoes);

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='shoes-list-grid'>
      {filteredItems.length > 0 ? (
        <div className='row'>
          {currentShoes.map(shoe => (
            <Shoe key={shoe._id} shoe={shoe} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}

      <Pagination
        shoesPerPage={shoesPerPage}
        totalShoes={filteredItems.length}
        paginate={paginate}
      />
    </div>
  );
};

// export default ShoesListGrid;

const mapStateToProps = state => ({
  shoesPerPage: state.cartAndFilter.shoesPerPage,
  filteredItems: state.cartAndFilter.filteredItems
});

export default connect(mapStateToProps)(ShoesListGrid);
