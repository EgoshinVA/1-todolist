import React from 'react';
import {Navigate} from "react-router-dom";

type Props = {
    children?: React.ReactNode;
}

export const ProtectedRoute = (props: Props) => {
const permission = false
    return (
        <div>
            {permission ? props.children : <Navigate to={'/error'}/>}
        </div>
    )
}