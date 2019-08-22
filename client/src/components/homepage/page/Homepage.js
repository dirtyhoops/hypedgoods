import React, { Fragment, useEffect } from 'react';

import ShoesGrid from '../ShoesGrid/ShoesGrid';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';
import Banner from '../Banner/Banner';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HeroImageCarousel />
      <section className='container'>
        <ShoesGrid />
      </section>
      <Banner />
    </Fragment>
  );
};

export default Homepage;
