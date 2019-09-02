import React, { Fragment, useEffect } from 'react';

import ShoesGrid from '../ShoesGrid/ShoesGrid';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';

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
      <Newsletter />
    </Fragment>
  );
};

export default Homepage;
