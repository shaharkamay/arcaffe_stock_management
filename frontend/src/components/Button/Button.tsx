import React from 'react';
import './button.css';

const Button = (props): JSX.Element => {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;