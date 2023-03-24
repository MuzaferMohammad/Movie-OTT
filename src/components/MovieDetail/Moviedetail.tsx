/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import './Moviedetail.css';
import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link, useParams } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails]: any = React.useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [castDetails, setCastDetails]: any = React.useState([]);

  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })

      .catch((error) => {
        console.error(error);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCastDetails(data.cast);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div className="movieDetailsPage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>

        <div className="movieDetails-section">
          <div className="moviedetails-container">
            <p className="movie-tagline">{movieDetails.tagline}</p>
            {/* <p className="movie-rating">{movieDetails.vote_average}</p> */}

            <div className="length-ratings-container">
              <div className="inner-length-ratings-container">
                <p className="heading">Length</p>
                <p className="heading-data">
                  {typeof movieDetails.runtime === 'number'
                    ? `${movieDetails.runtime} mins`
                    : 'N/A'}
                </p>
              </div>
              <div className="inner-length-ratings-container">
                <p className="heading">Language</p>
                <p className="heading-data">{movieDetails.original_language}</p>
              </div>{' '}
              <div className="inner-length-ratings-container">
                <p className="heading">Year</p>
                <p className="heading-data">
                  {typeof movieDetails.release_date === 'string'
                    ? movieDetails.release_date.substring(0, 4)
                    : 'N/A'}
                </p>
              </div>{' '}
              <div className="inner-length-ratings-container">
                <p className="heading">Status</p>
                <p className="heading-data">{movieDetails.status}</p>
              </div>
            </div>

            <p className="movieDetails-header">Genre </p>
            <div className="movieDetails-genre-container">
              {Boolean(movieDetails.genres) &&
                movieDetails.genres.map((genre: any) => (
                  <Link
                    to={`/genre/${genre.id}`}
                    className="genres-list"
                    key={genre.id}
                  >
                    {genre.name}
                  </Link>
                ))}
            </div>
            <img
              src={`${'https://image.tmdb.org/t/p/w500'}${
                movieDetails.poster_path
              }`}
              className="moviedetail-img"
            />
            <h2 className="moviedetail-title">{movieDetails.title}</h2>
            <p className="moviedetail-overview-container">Synopsis</p>
            <p className="moviedetail-overview">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
