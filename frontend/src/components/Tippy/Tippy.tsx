import React from 'react';
import TippyOrigin, { TippyProps } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

const Tippy = ({ children, content, ...props }: TippyProps) => {
  return (
    <TippyOrigin
      content={content}
      arrow
      trigger="mouseenter click"
      touch="hold"
      interactive
      animation="shift-away"
      maxWidth={'20rem'}
      {...props}
    >
      {children}
    </TippyOrigin>
  );
};

export default Tippy;
