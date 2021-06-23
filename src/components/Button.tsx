import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: React.FC = ({ children, ...rest }: ButtonProps) => {
  return (<button className="button" {...rest} >{children}</button>);
}