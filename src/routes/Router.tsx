import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject,} from "react-router-dom";
import App, {PATH} from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {Login} from "../components/pages/Login";
import {ProtectedPage} from "../components/pages/ProtectedPage";

const publicRoutes: RouteObject[] = [
    {
        path: '/error',
        element: <Error404/>
    },
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
    }, {
        path: '/',
        element: <Navigate to={PATH.ADIDAS}/>
    },
    {
        path: '/login',
        element: <Login/>
    }]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element: <ProtectedPage/>
    },
]

export const PrivateRoutes = () => {
    const access = true
    return (
        <div>
            {access ? <Outlet/> : <Navigate to={'/login'}/>}
        </div>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={'/error'}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes,
            },
            ...publicRoutes,

        ]
    },
])