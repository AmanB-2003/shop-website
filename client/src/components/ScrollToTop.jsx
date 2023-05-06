import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({children}) => {
    const location = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    // const { pathname } = useLocation();

    // useLayoutEffect(() => {
    //   document.documentElement.scrollTo(0, 0);
    // }, [pathname]);


    return children;
}

export default ScrollToTop;