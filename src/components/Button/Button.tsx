import React from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  value?: string;
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  label,
  value,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} type="button" disabled={disabled} {...props}>
      {label}
    </button>
  );
};
