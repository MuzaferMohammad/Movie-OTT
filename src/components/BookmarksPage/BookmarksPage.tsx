import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { MovieCards, MovieCardInterface } from '../MovieCards/MovieCards';
import BookmarkOn from '../MovieCards/assets/BookmarkOn.svg';
import './BookmarksPage.scss';

export const BookmarksPage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = React.useState<
    MovieCardInterface[]
  >([]);

  React.useEffect(() => {
    const bookmarkedMoviesData = JSON.parse(
      localStorage.getItem('Bookmarks') ?? '[]',
    );
    const bookmarkedMovies = bookmarkedMoviesData.map((movie: any) => {
      return { ...movie, isBookmarked: true, BookmarkIcon: BookmarkOn };
    });
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
            <div key={movie.id}>
              <MovieCards {...movie} className="movie-cards-bookmarks" />{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
