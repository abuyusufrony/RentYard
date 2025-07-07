import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;