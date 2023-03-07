import React from 'react';
import './InputTextField.css';

interface InputTextFieldInterface {
  backgroundColor?: string;
  label?: string;
  className?: string;
  type?: string;
  inputText?: string;
  handleText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export const InputTextField = ({
  label,
  inputText,
  handleText,
  backgroundColor,
  className,
  type,
  placeholder,
  error,
}: InputTextFieldInterface) => {
  return (
    <div className="inputTextField">
      <label>{label}</label>
      <input
        className={className}
        type={type}
        value={inputText}
        style={{ backgroundColor }}
        onChange={handleText}
        placeholder={placeholder}
        autoComplete="off"
      />
      <div className="error-message">{error}</div>
    </div>
  );
};
