import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Firstpage from '../components/firstPage/Firstpage';

const Router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Firstpage></Firstpage>
        },

    ]


}

])

export default Router;