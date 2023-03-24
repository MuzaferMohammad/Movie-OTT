import React from 'react';
import './SearchResult.css';
import { MovieCards } from '../MovieCards/MovieCards';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { useNavigate, useParams } from 'react-router-dom';
import { NoResults } from '../NoResults/NoResults';

export const SearchResult = () => {
  const userData = localStorage.getItem('userdata');

  const navigate = useNavigate();
  console.log(userData);

  React.useEffect(() => {
    if (userData === null) {
      navigate('/');
    }
  }, [navigate, userData]);

  const [results, setResults] = React.useState<
    Array<{ media_type: string; poster_path: string }>
  >([]);
  const { searchQuery } = useParams<{ searchQuery: string }>();

  // const navigate = useNavigate();

  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=13622fc50c5257d370284ea008163f90`,
    )
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery]);

  // if (results.length === 0) {
  //   navigate('/no-results');
  // }

  localStorage.setItem('resultLength', JSON.stringify(results.length));
  const movieResults = results.filter(
    (item) =>
      item.media_type !== 'person' &&
      item.media_type !== 'tv' &&
      item.poster_path !== null,
  );

  const tvResults = results.filter(
    (item) =>
      item.media_type !== 'person' &&
      item.media_type !== 'movie' &&
      item.poster_path !== null,
  );

  const filteredResultLength = movieResults.length + tvResults.length;

  return filteredResultLength > 0 || filteredResultLength !== null ? (
    <div className="homepage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>
        <p className="result-message">
          Found {filteredResultLength} results for ‘{searchQuery}’
        </p>
        <div className="search-results-container">
          {movieResults.map((result: any) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <MovieCards
              // genre="movies"

              genre="movies"
              category={result.media_type}
              key={result.id}
              id={result.id}
              className="movie-cards"
              poster={`${'https://image.tmdb.org/t/p/w500'}${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                result.poster_path
              }`}
              title={
                typeof result.title === 'string' && result.title !== null
                  ? result.title
                  : result.name
              }
              isBookmarked={result.isBookmarked}
              year={
                typeof result.release_date === 'string'
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)
              }
              BookmarkIcon={BookmarkIcon}
            />
          ))}
          {tvResults.map((result: any) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <MovieCards
              genre="series"
              category={result.media_type}
              key={result.id}
              id={result.id}
              className="movie-cards"
              poster={`${'https://image.tmdb.org/t/p/w500'}${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                result.poster_path
              }`}
              title={
                typeof result.title === 'string' && result.title !== null
                  ? result.title
                  : result.name
              }
              isBookmarked={result.isBookmarked}
              year={
                typeof result.release_date === 'string'
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)
              }
              BookmarkIcon={BookmarkIcon}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <NoResults searchInput={searchQuery} />
  );
};
