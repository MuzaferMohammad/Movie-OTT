import React from 'react';
// import { MovieCards } from '../MovieCards/MovieCards';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import './BookmarksPage.css';

// interface Movie {
//   id: number;
//   title: string;
//   year: number;
//   category: string;
//   poster: string;
//   isBookmarked?: boolean;
// }

export const BookmarksPage = () => {
  // const [bookmarkedMovies, setBookmarkedMovies] = React.useState<Movie[]>([]);

  return (
    <div className="bookmarkPage-container">
      {/* <div className="navigation-bar-home"></div> */}
      <NavigationBar />
      <div className="main-page-container">
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies or TV series" />
        </div>
        <div className="bookmarked-movie-container">
          <p className="trending-text">Bookmarked Movies</p>
        </div>
        <div className="bookmarked-moviecard-container">
          {/* <MovieCards
            poster={data[8].poster}
            year={data[8].year}
            title={data[8].title}
            category={data[8].category}
            BookmarkIcon={BookmarkIcon}
          /> */}
          {/* {bookmarkedMovies.map((movie) => (
            <MovieCards
              key={movie.id}
              poster={movie.poster}
              year={movie.year}
              title={movie.title}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};
