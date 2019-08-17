import React, { Fragment, useEffect } from 'react';

import ShirtHeroImage from '../ShirtHeroImage/ShirtHeroImage';
import ShoesGrid from '../ShoesGrid/ShoesGrid';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HeroImageCarousel />
      {/* <ShirtHeroImage /> */}
      <section className='container'>
        <ShoesGrid />
      </section>
    </Fragment>
  );
};

export default Homepage;
