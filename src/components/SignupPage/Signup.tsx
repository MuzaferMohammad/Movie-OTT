/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import './Signup.css';

const SignUp = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordMatch, setPasswordMatch] = React.useState('');
  const navigate = useNavigate();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexForFullName = /^[A-Za-z\s]*$/;
    if (
      event.target.value === '' ||
      regexForFullName.test(event.target.value)
    ) {
      setName(event.target.value);
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexForEmail = /^[a-z]/;
    if (event.target.value === '' || regexForEmail.test(event.target.value)) {
      setEmail(event.target.value);
    }
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexForPassword = /[a-z]/;
    if (
      event.target.value === '' ||
      regexForPassword.test(event.target.value)
    ) {
      setPassword(event.target.value);
    }
  };

  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const regexForConfirmPassword = /[a-z]/;
    if (
      event.target.value === '' ||
      regexForConfirmPassword.test(event.target.value)
    ) {
      setConfirmPassword(event.target.value);
    }
  };

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!name && !email && !password) {
      alert('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMatch('Password does not match');
      return;
    }

    const response = await fetch(
      'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username: name,
          password,
          email,
        }),
      },
    );

    const data = await response.json();
    console.log(data);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!name || !email || !password) {
      alert(data.error.message);
      return;
    }

    if (response.ok) {
      alert('Registered successfully');
      navigate('/');
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
          type="text"
        />

        <InputTextField
          label="Email"
          inputText={email}
          handleText={handleEmail}
          placeholder="Email"
          className="inputtext-data"
          type="text"
        />

        <InputTextField
          label="Password"
          inputText={password}
          handleText={handlePassword}
          placeholder="Password"
          className="inputtext-data"
          type="password"
        />

        <InputTextField
          label="Confirm Password"
          inputText={confirmPassword}
          handleText={handleConfirmPassword}
          placeholder="Confirm Password"
          className="inputtext-data"
          type="password"
          error={passwordMatch}
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
