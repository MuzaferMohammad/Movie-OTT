import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomePage.css';
import { MovieCards } from '../MovieCards/MovieCards';
import { MovieTray } from '../MovieTray/MovieTray';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const userData = localStorage.getItem('userdata');

  const [populourMovies, setPopulourMovies] = React.useState([]);

  const navigate = useNavigate();
  // console.log(userData);

  // check if the user is logged in otherwise redirect the user to sign-in page
  React.useEffect(() => {
    userData !== null ? navigate('/home') : navigate('/');
  }, [navigate, userData]);

  // fetch popular movies
  React.useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/movie/popular?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US&page=1`,
      )
      .then(({ data: { results } }) => {
        setPopulourMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies or TV series" />
        </div>
        <div className="trending-container">
          <p className="trending-text">Trending</p>
          <div className="movie-box">
            <p>Movie</p>
          </div>
        </div>
        <div className="movie-tray-container">
          <MovieTray />
        </div>
        <div className="popular-movie-container">
          <p className="trending-text">Popular</p>
          <div className="movie-box">
            <p>Movie</p>
          </div>
        </div>
        <div className="popular-moviecard-container">
          {populourMovies.map((movie: any, index: number) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <div key={movie.id}>
              <MovieCards
                {...movie}
                className="movie-cards"
                genre="movies"
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                title={movie.title || movie.name}
                BookmarkIcon={BookmarkIcon}
                year={movie.release_date.substring(0, 4)}
                category={'Movie'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
