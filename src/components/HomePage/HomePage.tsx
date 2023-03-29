/* eslint-disable @typescript-eslint/restrict-template-expressions */
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
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const navigate = useNavigate();
  // console.log(userData);

  // check if the user is logged in otherwise redirect the user to sign-in page
  React.useEffect(() => {
    userData !== null ? navigate('/home') : navigate('/');
  }, [navigate, userData]);

  // fetch popular movies
  const apiKey = process.env.REACT_APP_OTT_API_KEY;
  const getPopularMovies = (page: number) => {
    axios
      .get(
        ` https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&page=${page}`,
      )
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .then(({ data: { results, total_pages } }) => {
        setPopulourMovies(results);
        setTotalPages(total_pages); // Update the totalPages state with the total number of pages returned by the API
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch popular movies on component mount
  React.useEffect(() => {
    getPopularMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

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
          {/* Carousel for trending movies */}
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
                title={movie.title}
                BookmarkIcon={BookmarkIcon}
                year={
                  typeof movie.release_date === 'string'
                    ? movie.release_date.substring(0, 4)
                    : 'N/A'
                }
                category={'Movie'}
              />
            </div>
          ))}
        </div>
        {totalPages > 1 && ( // If there is more than one page of results, render the pagination component
          <div className="pagination">
            {[...Array(Math.min(totalPages, 5))].map((_, i) => {
              // Render up to 5 pagination buttons, or the total number of pages, whichever is smaller

              const pageNumber = i + 1; // Calculate the page number for the button
              const isCurrentPage = pageNumber === currentPage;
              // Determine if the button represents the current page
              // console.log(isCurrentPage);

              return (
                <button
                  value="page"
                  key={pageNumber}
                  className={`pagination__button ${
                    isCurrentPage ? 'active' : ''
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                  // Call the handlePageChange function when the button is clicked
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
