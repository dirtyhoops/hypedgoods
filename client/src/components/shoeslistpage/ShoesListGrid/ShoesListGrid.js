import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Shoe from './Shoe';
import Pagination from '../Pagination/Pagination';

import './ShoesListGrid.css';

const ShoesListGrid = props => {
  const { shoesPerPage, shoes } = props;

  const [shoesList, setShoesList] = useState(shoes);
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPage, setShoesPage] = useState(shoesPerPage);

  // changes the shoesPerPage whenever the redux state changes
  if (shoesPage !== shoesPerPage) {
    setShoesPage(shoesPerPage);
    setCurrentPage(1);
  }

  // const sortedItems_pricelow = []
  //   .concat(shoesList)
  //   .sort((a, b) => a.lowest_price - b.lowest_price);

  // const sortedItems_pricehigh = []
  //   .concat(shoesList)
  //   .sort((a, b) => b.lowest_price - a.lowest_price);

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
        <div className='row'>
          {currentShoes.map(shoe => (
            <Shoe key={shoe._id} shoe={shoe} />
          ))}
        </div>
      </div>
      <Pagination
        shoesPerPage={shoesPerPage}
        totalShoes={shoesList.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ShoesListGrid;

// const mapStateToProps = state => ({
//   shoesPerPage: state.cartAndFilter.shoesPerPage
// });

// export default connect(mapStateToProps)(ShoesListGrid);
