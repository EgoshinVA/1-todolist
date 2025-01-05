import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App, {PATH} from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
        ]
    },
])