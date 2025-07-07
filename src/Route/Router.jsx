import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';

const Router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <h2>here we will show total from </h2>
        },

    ]


}

])

export default Router;