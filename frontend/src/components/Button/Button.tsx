import React from 'react';
import './button.css';

const Button = (props: {children: React.ReactNode, onClick: React.MouseEventHandler<HTMLElement>, className?: string}): JSX.Element => {
    return (
        <button className='default-btn' {...props} >{props.children}</button>
    );
};

export default Button;