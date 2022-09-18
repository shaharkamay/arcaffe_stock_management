import React from 'react';
import './button.css';

const Button = (props: {children: React.ReactNode, onClick: React.MouseEventHandler<HTMLElement>}): JSX.Element => {
    return (
        <button className='default-btn' onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;