import React, { Fragment, useEffect } from 'react';

import ShirtHeroImage from '../ShirtHeroImage/ShirtHeroImage';
import ShoesGrid from '../ShoesGrid/ShoesGrid';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
