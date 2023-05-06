import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import "./Home.scss";

function Home(){
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className='home'>
            <Slider />
            <FeaturedProducts type="featured" />
            <Categories />
            <FeaturedProducts type="trending" />
            <Contact />
        </div>
    )
}

export default Home;

