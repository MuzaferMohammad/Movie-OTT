import React from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  value?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, value, className, ...props }: ButtonProps) => {
  return (
    <button
      className={className}
      type="button"
      // disabled={!value}
      {...props}
    >
      {label}
    </button>
  );
};
