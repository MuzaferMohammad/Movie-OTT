import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { MovieCards, MovieCardInterface } from '../MovieCards/MovieCards';
import './BookmarksPage.scss';

export const BookmarksPage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = React.useState<
    MovieCardInterface[]
  >([]);

  React.useEffect(() => {
    // get the value of the 'Bookmarks' key from localStorage
    //  If the value is not found set it as an empty array ([]).
    const bookmarkedMovies = JSON.parse(
      localStorage.getItem('Bookmarks') ?? '[]',
    );
    setBookmarkedMovies(bookmarkedMovies);
  }, []);
  console.log(bookmarkedMovies);

  return (
    <div className="bookmarkPage-container">
      <NavigationBar />
      <div className="main-page-container">
        {' '}
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies or TV series" />
        </div>
        <div className="bookmarkPage-container__movie-container">
          <p className="trending-text">Bookmarked Movies</p>
        </div>
        <div className="bookmarkPage-container__moviecard-container">
          {bookmarkedMovies.map((movie) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <div key={movie.id} id={`bookmark-${movie.id}`}>
              {/* map over the bookmarkedMovies array and create a MovieCard component for
          each item in the array */}
              <MovieCards {...movie} className="movie-cards-bookmarks" />{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
