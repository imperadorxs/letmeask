import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};


export const Button: React.FC<ButtonProps> = ({ isOutlined = false, children, ...rest }: ButtonProps) => {
  return (<button className={`button ${isOutlined ? 'outlined' : ''}`} {...rest} >{children}</button>);
}