import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '../Button/Button';
import './HomePage.css';

// interface ButtonProps {
//   backgroundColor?: string;
//   color?:string;
//   label: string;
//   onClick?: () => void;
// }

export const HomePage = () => {
  // const navigate = useNavigate();
  // const handleLogoutClick = () => {
  //   localStorage.removeItem('userdata');
  //   navigate('/');
  // };
  return (
    <div className="homepage-container">
      <p className="trending-text">Trending</p>
      <div className="movie-box">
        <p>Movie</p>
      </div>{' '}
      <div className="popular-movie-container">
        <p className="trending-text">Popular</p>
        <div className="movie-box">
          <p>Movie</p>
        </div>{' '}
      </div>
      {/* <Button
        label={'Log out'}
        onClick={handleLogoutClick}
      /> */}
    </div>
  );
};
