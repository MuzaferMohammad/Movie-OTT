/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './SearchResult.css';
import { MovieCards } from '../MovieCards/MovieCards';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { useNavigate, useParams } from 'react-router-dom';
// import { NoResults } from '../NoResults/NoResults';

export const SearchResult = () => {
  const userData = localStorage.getItem('userdata');

  const navigate = useNavigate();
  React.useEffect(() => {
    if (userData === null) {
      navigate('/');
    }
  }, [navigate, userData]);

  const [results, setResults] = React.useState<
    Array<{ media_type: string; poster_path: string }>
  >([]);

  const { searchQuery } = useParams<{ searchQuery: string }>();

  const apiKey = process.env.REACT_APP_OTT_API_KEY;

  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${apiKey}`,
    )
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery, results, apiKey]);

  // console.log(results);

  localStorage.setItem('searchInput', JSON.stringify(searchQuery));

  // filter movies from the results
  const movieResults = results.filter(
    (item) => item.media_type === 'movie' && item.poster_path !== null,
  );

  // filter tv series from the results
  const tvResults = results.filter(
    (item) => item.media_type === 'tv' && item.poster_path !== null,
  );

  // calculate total length of filtered movies and tv series
  const filteredResultLength = movieResults.length + tvResults.length;

  // navigate to no-results page if filteredResultLength is equal to zero
  if (filteredResultLength === 0) {
    navigate('/no-results');
  }

  return (
    <div className="search-results-page-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>
        {filteredResultLength > 0 && (
          <p className="result-message">
            Found {filteredResultLength} results for '{searchQuery}'
          </p>
        )}
        <div className="search-results-container">
          {movieResults.map((result: any) => (
            <MovieCards
              genre="movies"
              category="Movie"
              key={result.id}
              id={result.id}
              className="movie-cards"
              poster={`${'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces'}${
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
                  : 'N/A'
              }
              BookmarkIcon={BookmarkIcon}
            />
          ))}
          {tvResults.map((result: any) => (
            <MovieCards
              genre="series"
              category="TV"
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
                typeof result.first_air_date === 'string'
                  ? result.first_air_date.substring(0, 4)
                  : 'N/A'
              }
              BookmarkIcon={BookmarkIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
