import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Shoe from './Shoe';
import Pagination from '../Pagination/Pagination';

import './ShoesListGrid.css';

const ShoesListGrid = ({ shoes }) => {
  // Sorts the collection (desc date_added)

  const [shoesList, setShoesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage, setShoesPerPage] = useState(10);

  // Copiess the shoes array(all the shoes in the inventory) from redux
  useEffect(() => {
    setLoading(true);
    setShoesList(shoes);
    setLoading(false);
  }, []);

  // Get current shoes
  const indexOfLastShoes = currentPage * shoesPerPage;
  const indexOfFirstShoes = indexOfLastShoes - shoesPerPage;
  const currentShoes = shoesList.slice(indexOfFirstShoes, indexOfLastShoes);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Delete this later
  console.log('shoes list: ', shoesList);

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

//   return (
//     <div className='shoes-list-grid'>
//       <div className='row'>
//         {shoes ? (
//           <div className='row'>
//             {shoes.map(shoe => (
//               <Shoe key={shoe._id} shoe={shoe} />
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

ShoesListGrid.propTypes = {
  shoes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes
});

export default connect(mapStateToProps)(ShoesListGrid);
