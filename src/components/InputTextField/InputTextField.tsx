import React from 'react';
import './InputTextField.css';

interface InputTextFieldInterface {
  backgroundColor?: string;
  label?: string;
  className?: string;
  inputText?: string;
  handleText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTextField = ({
  label,
  inputText,
  handleText,
  backgroundColor,
  className,
  placeholder,
  error,
}: InputTextFieldInterface) => {
  return (
    <div className="inputTextField">
      <label>{label}</label>
      <input
        className={className}
        type="text"
        id="input-text"
        value={inputText}
        style={{ backgroundColor }}
        onChange={handleText}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};
