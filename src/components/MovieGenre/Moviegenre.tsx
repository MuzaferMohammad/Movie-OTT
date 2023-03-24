/* eslint-disable @typescript-eslint/promise-function-async */
import './Moviegenre.css';
import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const MovieGenre = () => {
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="movieGenres-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>

        <div className="moviegenre-section">
          <div className="movie-genre">
            {genres.map((genre: any, index) => (
              <Link
                key={index}
                className={`moviegenre-link ${
                  index % 2 === 0 ? 'even' : 'odd'
                }`}
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                to={`/genre/${genre.id}`}
              >
                {genre.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieGenre;
