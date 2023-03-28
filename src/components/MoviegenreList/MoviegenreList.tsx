import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieCards } from '../MovieCards/MovieCards';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import './MoviegenreList.css';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';

export const MovieGenreList = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/discover/movie?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`,
    )
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [genreId]);

  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>
        <div className="moviegenre-section">
          <div className="moviegenre-list">
            {movies.map((movie: any) => (
              <MovieCards
                key={movie.id}
                id={movie.id}
                genre="movies"
                category="Movie"
                className="movie-cards"
                year={
                  typeof movie.release_date === 'string'
                    ? movie.release_date.substring(0, 4)
                    : 'N/A'
                }
                poster={`${'https://image.tmdb.org/t/p/w500'}${
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  movie.poster_path
                }`}
                title={movie.title}
                BookmarkIcon={BookmarkIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
