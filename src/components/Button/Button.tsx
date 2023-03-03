import React from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  backgroundColor?: string;
  color?: string;
  value?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, className }: ButtonProps) => {
  return (
    <button className={className} type="button">
      {label}
    </button>
  );
};
