import React from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import './Signup.css';

const SignUp = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log(name, email, password);
    }
  };

  return (
    <div className="input-section">
      <h1>Movie OTT</h1>
      <div className="inputText-container">
        <h1>Register</h1>
        <InputTextField
          label="Full Name"
          inputText={name}
          handleText={handleName}
          placeholder="Full Name"
          className="inputtext-data"
        />

        <InputTextField
          label="Email"
          inputText={email}
          handleText={handleEmail}
          placeholder="Email"
          className="inputtext-data"
        />

        <InputTextField
          label="Password"
          inputText={password}
          handleText={handlePassword}
          placeholder="Password"
          className="inputtext-data"
        />

        <InputTextField
          label="Confirm Password"
          inputText={confirmPassword}
          handleText={handleConfirmPassword}
          placeholder="Confirm Password"
          className="inputtext-data"
        />

        <div className="register-btn">
          <Button
            onClick={handleRegister}
            className="submit-button"
            label={'Register'}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
