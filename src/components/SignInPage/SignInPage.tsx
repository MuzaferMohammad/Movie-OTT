import React from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

export const SignInPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signInError, setSignInError] = React.useState('');

  const navigate = useNavigate();

  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSignInClick() {
    setSignInError('');
    // Make API call to sign in the user
    fetch('https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful sign in
          void response.json().then((data) => {
            localStorage.setItem('userdata', JSON.stringify(data));
            navigate('home');
            console.log(response);
            console.log('User signed in successfully');
          });
        } else {
          // Handle sign in error
          setSignInError('Invalid credentials');
        }
      })
      .catch((error) => {
        console.log('Error signing in: ', error);
      });
  }

  const handleSignUpClick = () => {
    navigate('Signup');
  };

  return (
    <div className="container">
      <h1>Movie OTT</h1>
      <div className="inner-container">
        <div className="sign_in-container">
          <p className="signin-heading">
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
            type="password"
            label="Password"
            placeholder="Password"
            inputText={password}
            handleText={handlePasswordInput}
          />
          {signInError !== '' ? (
            <div className="signin-error">{signInError}</div>
          ) : null}
          {/* <p className='signin-error'>Sign In Warning/Error cases</p> */}
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
