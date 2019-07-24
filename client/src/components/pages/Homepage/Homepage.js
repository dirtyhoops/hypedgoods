import React, { Fragment } from 'react';

import ShirtHeroImage from '../../layout/ShirtHeroImage/ShirtHeroImage';
import ShoesGrid from '../../layout/ShoesGrid/ShoesGrid';

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
