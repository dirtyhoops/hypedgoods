import React from 'react';
import { Link } from 'react-router-dom';

import './RecommendedShoes.css';

const RecommendedShoes = props => {
  const { recommendedShoes, click } = props;
  return (
    <div className='wrapper-recommended-shoes'>
      {recommendedShoes.length !== 0 ? (
        <>
          <h1>recommended for you</h1>

          <div className='container-recommended-shoes'>
            {recommendedShoes.slice(0, 8).map((shoe, index) => (
              <Link
                key={index}
                to={`/products/shoes/${shoe._id}`}
                onClick={() => click(shoe._id)}
              >
                <div className='column-recommended-shoes'>
                  <div className='recommended-shoes-image'>
                    <img src={shoe.images[0]} alt='recommended_image' />
                  </div>
                  <div className='recommended-shoes-info'>
                    <p>
                      {shoe.brand} {shoe.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
      {/* doesnt display any recommended shoes when the shoes array in redux is empty */}
    </div>
  );
};

export default RecommendedShoes;
