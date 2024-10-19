import React from 'react';

type ButtonPropsType = {
    title: string
}

export const Button: React.FC<ButtonPropsType> = ({title}) => {
    return (
        <button>
            {title}
        </button>
    );
};