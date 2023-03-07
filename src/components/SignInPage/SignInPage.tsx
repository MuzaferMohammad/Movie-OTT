import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

// interface SignInPageInterface {
//   label?: string;
//   email?: string;
//   password?: string;
//   handleEmailInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePasswordInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
// }

export const SignInPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signInError, setSignInError] = React.useState('');
  const navigate = useNavigate();

  const userData = localStorage.getItem('userdata');

  useEffect(() => {
    userData !== null ? navigate('home') : navigate('/');
  }, [navigate, userData]);

  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const data = {
    username: email,
    password: password,
  };

  function handleSignInClick() {
    setSignInError('');
    // Make API call to sign in the user
    fetch('https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: data.username,
        password: data.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful sign in
          localStorage.setItem('userdata', JSON.stringify(data));
          navigate('home');
          console.log(response);
          console.log('User signed in successfully');
        } else {
          // Handle sign in error
          setSignInError('Invalid credentials');
        }
      })
      .catch((error) => {
        // Handle sign in error
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
          <div className="signin-error">{signInError}</div>
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
