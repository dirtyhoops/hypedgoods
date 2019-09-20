import React, { useState } from 'react';
import { connect } from 'react-redux';
import Shoe from './Shoe';
import Pagination from '../Pagination/Pagination';
import Spinner from '../../layout/Spinner/Spinner';

import './ShoesListGrid.css';

const ShoesListGrid = props => {
  const { shoesPerPage, filteredItems } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPage, setShoesPage] = useState(shoesPerPage);

  // changes the shoesPerPage whenever the redux state changes
  if (shoesPage !== shoesPerPage) {
    setShoesPage(shoesPerPage);
    setCurrentPage(1);
  }

  // Get current shoes
  const indexOfLastShoes = currentPage * shoesPerPage;
  const indexOfFirstShoes = indexOfLastShoes - shoesPerPage;
  const currentShoes = filteredItems.slice(indexOfFirstShoes, indexOfLastShoes);

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='wrapper-shoes-list-grid'>
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
