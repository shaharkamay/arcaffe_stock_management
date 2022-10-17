import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 999px;
  background-color: var(--background);
  font-size: 1rem;
  height: 3rem;
  aspect-ratio: 1 / 1;
  color: var(--foreground);

  &:active {
    background-color: var(--background-secondary);
  }
`;

const Button = ({
  children,
  onClick,
  primary = true,
  secondary,
  tertiary,
  className,
  ...restProps
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  [attr: string]: unknown;
}): JSX.Element => {
  return (
    <StyledButton
      {...{
        onClick,
        primary,
        secondary,
        tertiary,
        className,
      }}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;