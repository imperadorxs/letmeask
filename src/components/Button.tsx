import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return (<button className="button" {...rest} >{children}</button>);
}