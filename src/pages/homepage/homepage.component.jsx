import React from 'react';

import './homepage.styles.scss'
import Categories from '../../components/categories/categories.component';
import HeroImage from '../../components/hero-image/hero-image.component';

const Homepage = () => (
    <div className='homepage'>
       <HeroImage /> 
       <Categories />
    </div>
);
  

export default Homepage;