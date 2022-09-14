import React from 'react';
import Button from '../../Button/Button';

const Item = (): JSX.Element => {
    return (
        <div className='list-item'>
            <Button onClick={() => alert('U suck!')}>-5</Button>
            <Button onClick={() => alert('U suck!')}>-</Button>
            <div>
                <span>Item </span>
                <span>Count</span>
            </div>
            <Button onClick={() => alert('U suck!')}>+</Button>
            <Button onClick={() => alert('U suck!')}>+5</Button>
        </div>
    );
};

export default Item;