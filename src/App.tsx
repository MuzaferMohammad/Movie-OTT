import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/SignupPage/Signup';
import { SignInPage } from './components/SignInPage/SignInPage';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  // const userData = localStorage.getItem('userdata');

  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />{' '}
          {/* <Route
            path="/"
            element={userData !== null ? <HomePage /> : <SignInPage />}
          /> */}
          <Route path="Signup" element={<RegisterPage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
