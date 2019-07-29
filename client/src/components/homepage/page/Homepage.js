import React, { Fragment } from 'react';

import ShirtHeroImage from '../ShirtHeroImage/ShirtHeroImage';
import ShoesGrid from '../ShoesGrid/ShoesGrid';

const Homepage = () => {
  return (
    <Fragment>
      <ShirtHeroImage />
      <section className='container'>
        <ShoesGrid />
      </section>
    </Fragment>
  );
};

export default Homepage;
