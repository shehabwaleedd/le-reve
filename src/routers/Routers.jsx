import React from 'react'
import { useRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NotFound from '../pages/notFound/NotFound';
import SiteHome from '../pages/home/SiteHome';
import Hotel from '../pages/hotel/Hotel';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Menu from '../pages/menu/Menu';
import Admin from '../pages/admin/Admin';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from "../login/authContext/AuthContext"
import Login from '../login/login/Login';
import AdminEdit from '../pages/admin/adminComponents/adminEdit/AdminEdit';
import AdminAddNewItem from '../pages/admin/adminComponents/adminAddNewItem/AdminAddNewItem';

const Routers = ({ navOpen }) => {
    const { user } = useUserAuth();
    const location = useLocation();
    const routeConfig = [
        {
            path: '/',
            element: <SiteHome key={location.pathname} navOpen={navOpen} />
        },
        { path: '/hotel', element: <Hotel /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/menu', element: <Menu /> },
        { path: '/login', element: <Login /> },
        { path: "/admin", element: user ? <Admin /> :  <Navigate to="/login" replace /> },
        { path: "/edit/:section/:id", element: user ? <AdminEdit /> :  <Navigate to="/login" replace /> },
        { path: "/admin/addNewItem", element: user ? <AdminAddNewItem /> :  <Navigate to="/login" replace /> },
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