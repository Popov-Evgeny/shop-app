import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ErrorPage from "./pages/Error-page/Error-page";
import {Provider} from "react-redux";
import {store} from "./store";
import Category from "./pages/Category/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: "shop-app", element: <Home/>},
            {
                path: "/about",
                element: <About/>,

            }, {
                path: "/category",
                element: <Category/>,
                children: [
                    {
                        path: "/category/:category",
                        element: <Category/>
                    },
                ]
            },
            {path: "*", element: <ErrorPage/>},
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)