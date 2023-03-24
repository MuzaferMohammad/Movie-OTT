import React from 'react';
import logo from './assets/logo.svg';
// import Dashboard from './assets/dashboardOff.svg';
import homepage from './assets/homepage.svg';
// import dashboardOff from './assets/dashboardOff.svg';
import Movie from './assets/Movie.svg';
// import movieOn from './assets/movieOn.svg';
import TVSeries from './assets/TVSeries.svg';
// import TVOff from './assets/TVOff.svg';
import Bookmark from './assets/Bookmark.svg';
// import bookmarkOn from './assets/bookmarkOn.svg';
import Profile from './assets/Profile.svg';

import './NavigationBar.css';
import { useLocation } from 'react-router-dom';

export const NavigationBar = () => {
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);

  const location = useLocation();
  // const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsLoggingOut(!isLoggingOut);
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('userdata');
      localStorage.removeItem('token');
      // navigate('/');
      window.history.replaceState(null, '', '/');
      window.location.reload();
      // window.addEventListener('popstate', function(event) {
      // navigate('/');
      // });
    }
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-bar-dashboard">
        <img src={logo} className="nav-bar-logo" />
      </div>
      <section className="nav-bar-section">
        <a href="/home" className="nav-bar-dashboard">
          <img
            src={homepage}
            className={`nav-bar-link ${
              location.pathname === '/home' || location.pathname === '/'
                ? 'homeIconactive'
                : 'homeIcon'
            }`}
          />
        </a>{' '}
        <a href="/movie-genres" className="nav-bar-dashboard">
          <img
            src={Movie}
            className={`nav-bar-link ${
              location.pathname === '/movie-genres' ? 'active' : ''
            }`}
          />
        </a>{' '}
        <a href="/TVGenre" className="nav-bar-dashboard">
          <img
            src={TVSeries}
            className={`nav-bar-link ${
              location.pathname === '/TVGenre' ? 'active' : ''
            }`}
          />
        </a>{' '}
        <a href="/bookmarks" className="nav-bar-dashboard">
          <img
            src={Bookmark}
            className={`nav-bar-link ${
              location.pathname === '/bookmarks' ? 'active' : ''
            }`}
          />
        </a>{' '}
      </section>
      <button onClick={handleProfileClick} className="nav-bar-profile">
        <img src={Profile} />
      </button>
    </div>
  );
};
