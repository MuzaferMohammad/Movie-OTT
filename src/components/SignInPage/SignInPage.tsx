import React from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

interface SignInPageInterface {
  label?: string;
  email?: string;
  password?: string;
  handleEmailInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SignInPage = ({ label, placeholder }: SignInPageInterface) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForEmail = /^[a-z]/;
    if (event.target.value === '' || regexForEmail.test(event.target.value)) {
      setEmail(event.target.value);
    }
  }

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForPassword = /^[0-9]+$/;
    if (
      event.target.value === '' ||
      regexForPassword.test(event.target.value)
    ) {
      setPassword(event.target.value);
    }
  }

  function handleSignInClick() {
    alert('Signing In');
  }

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // alert('Signing In');
    navigate('register');
  };

  return (
    <div className="container">
      <h1>Movie OTT</h1>
      <div className="inner-container">
        <div className="sign_in-container">
          <p>
            <span>Sign</span> In
          </p>
          <InputTextField
            className="input-field"
            label="Email"
            placeholder="Email"
            inputText={email}
            handleText={handleEmailInput}
          />
          <InputTextField
            className="input-field"
            label="Password"
            placeholder="Password"
            inputText={password}
            handleText={handlePasswordInput}
          />
          <div className="signin-button-container">
            <Button
              className="signin-button"
              label={'Sign In'}
              onClick={handleSignInClick}
            />{' '}
          </div>
        </div>
        <div className="signup-container">
          <p className="welcome-note">
            <span>Welcome to</span> Movie OTT
          </p>
          <p className="create-account-note">
            <span>New here?</span> Create an account here.
          </p>
          <Button
            className="signup-button"
            label={'Sign Up'}
            onClick={handleSignUpClick}
          />
        </div>
      </div>
    </div>
  );
};
