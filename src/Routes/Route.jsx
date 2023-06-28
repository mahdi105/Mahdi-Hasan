import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: ([
            {
                path: '/',
                element: <About></About>
            },
            {
                path: '/portfolio',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ])

    }
])

export default Route;