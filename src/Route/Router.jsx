import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Firstpage from '../components/firstPage/Firstpage';
import Info from '../components/info/Info';

const Router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Firstpage></Firstpage>
        },
        {
            path: '/info',
            element: <Info></Info>
        }

    ]


}

])

export default Router;