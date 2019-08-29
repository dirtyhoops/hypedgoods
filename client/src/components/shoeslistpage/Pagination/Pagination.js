import React, { useState } from 'react';

import './Pagination.css';

const Pagination = ({ shoesPerPage, totalShoes, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalShoes / shoesPerPage); i++) {
    pageNumbers.push(i);
  }

  if (totalShoes < shoesPerPage && currentPage === 2) {
    setCurrentPage(1);
  }

  const paginateGrid = number => {
    paginate(number);
    setCurrentPage(number);
  };

  // @todo:
  // 1. change the <a> to <p> later and make it pretty
  return (
    <div className='wrapper-pagination'>
      {pageNumbers.length > 1 ? (
        <ul className='pagination'>
          {currentPage > 1 && pageNumbers.length > 1 ? (
            <li>
              <a onClick={() => paginateGrid(currentPage - 1)} href='#'>
                Previous
              </a>
            </li>
          ) : null}
          {pageNumbers.map(number => (
            <li
              key={number}
              className={currentPage === number && 'currentPage-selected'}
            >
              <a onClick={() => paginateGrid(number)} href='#'>
                {number}
              </a>
            </li>
          ))}
          {currentPage < pageNumbers.length &&
          currentPage !== pageNumbers.length ? (
            <li>
              <a onClick={() => paginateGrid(currentPage + 1)} href='#'>
                Next
              </a>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
};

export default Pagination;
