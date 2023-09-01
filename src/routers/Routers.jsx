import React from 'react'
import { useRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NotFound from '../pages/notFound/NotFound';
import SiteHome from '../pages/home/SiteHome';
const Routers = ({ navOpen }) => {
    const location = useLocation();
    const routeConfig = [
        {
            path: '/',
            element: <SiteHome key={location.pathname} navOpen={navOpen} />
        },

        { path: '*', element: <NotFound /> },
    ];

    const renderedRoutes = useRoutes(routeConfig);

    return (
        <>
            {renderedRoutes}
        </>
    );
}

export default Routers