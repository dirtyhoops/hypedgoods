import React, { useEffect, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getShoeModel } from '../../../actions/shoe';
import Spinner from '../../layout/Spinner/Spinner';

import './RelatedShoes.css';

const RelatedShoes = ({
  getShoeModel,
  shoe: { shoesWithModel, loadingShoesWithModel },
  shoeBrand,
  click
}) => {
  //change it to params
  useEffect(() => {
    getShoeModel(shoeBrand);
    checkWindowWidth();
  }, []);

  const [visSlides, setVisSlides] = useState(0);
  const [stepSlide, setStepSlide] = useState(0);

  const changeShoes = (shoeId, newbrand) => {
    click(shoeId);
    getShoeModel(newbrand);
  };

  const checkWindowWidth = () => {
    const windowWidth = window.innerWidth;

    switch (true) {
      case windowWidth <= 480: // phone
        return setVisSlides(2) & setStepSlide(2);
      case windowWidth <= 768: //ipad
        return setVisSlides(3) & setStepSlide(2);
      case windowWidth <= 1024: //high resolution laptop
        return setVisSlides(4) & setStepSlide(1);
      default:
        // resolution higher than 1024, usually desktop computer
        return setVisSlides(5) & setStepSlide(1);
    }
  };
  return (
    <div className='wrapper-related-shoes'>
      <h1>Related Shoes</h1>

      {loadingShoesWithModel && shoesWithModel === null ? (
        <Spinner />
      ) : (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={14}
          visibleSlides={visSlides}
          step={stepSlide}
        >
          <Slider>
            {shoesWithModel.slice(0, 14).map((shoe, ind) => (
              <Slide index={ind} key={ind}>
                <Link
                  to={`/products/shoes/${shoe._id}`}
                  onClick={() => changeShoes(shoe._id, shoe.brand)}
                >
                  <div className='related-shoes-image'>
                    <img src={shoe.images[0]} alt='relatedshoe_image' />
                  </div>
                  <div className='related-shoes-info'>
                    <p>
                      {shoe.brand} {shoe.name}
                    </p>
                  </div>
                </Link>
              </Slide>
            ))}
          </Slider>
          <ButtonBack className='prevbutton-recommendedshoes'>
            <i className='fa fa-chevron-left' />
          </ButtonBack>
          <ButtonNext className='nextbutton-recommendedshoes'>
            <i className='fa fa-chevron-right' />
          </ButtonNext>
        </CarouselProvider>
      )}
    </div>
  );
};

RelatedShoes.propTypes = {
  shoesWithModel: PropTypes.array,
  getShoeModel: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  shoe: state.shoe,
  shoeBrand: ownProps.shoeBrand
});

export default connect(
  mapStateToProps,
  { getShoeModel }
)(RelatedShoes);

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { getShoeModel } from '../../../actions/shoe';

// import './RelatedShoes.css';

// const RelatedShoes = ({
//   getShoeModel,
//   shoe: { shoesWithModel, loadingShoesWithModel },
//   shoeBrand,
//   click
// }) => {
//   //change it to params
//   useEffect(() => {
//     getShoeModel(shoeBrand);
//   }, []);

//   const changeShoes = (shoeId, newbrand) => {
//     click(shoeId);
//     getShoeModel(newbrand);
//   };

//   return (
//     <div className='wrapper-related-shoes'>
//       <h1>Related Shoes</h1>

//       {loadingShoesWithModel && shoesWithModel === null ? (
//         <p>related shoes are loading </p>
//       ) : (
//         <div className='container-related-shoes'>
//           {shoesWithModel.slice(0, 8).map((shoe, index) => (
//             <Link
//               key={index}
//               to={`/products/shoes/${shoe._id}`}
//               onClick={() => changeShoes(shoe._id, shoe.brand)}
//             >
//               <div className='column-related-shoes item'>
//                 <div className='related-shoes-image'>
//                   <img src={shoe.images[0]} alt='relatedshoe_image' />
//                 </div>
//                 <div className='related-shoes-info'>
//                   <p>
//                     {shoe.brand} {shoe.name}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// RelatedShoes.propTypes = {
//   shoesWithModel: PropTypes.array,
//   getShoeModel: PropTypes.func.isRequired
// };

// const mapStateToProps = (state, ownProps) => ({
//   shoe: state.shoe,
//   shoeBrand: ownProps.shoeBrand
// });

// export default connect(
//   mapStateToProps,
//   { getShoeModel }
// )(RelatedShoes);
