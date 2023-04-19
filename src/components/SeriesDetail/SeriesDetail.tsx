/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import './SeriesDetail.css';
import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link, useParams } from 'react-router-dom';
import { getLanguageName } from '../../LanguageName';
const SeriesDetails = () => {
  const { tvseriesId } = useParams<{ tvseriesId: string }>();
  const [seriesDetails, setseriesDetails]: any = React.useState([]);
  const [seriescastDetails, setSeriesCastDetails] = React.useState([]);
  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/tv/${tvseriesId}?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setseriesDetails(data);
      })

      .catch((error) => {
        console.error(error);
      });
    fetch(
      `https://api.themoviedb.org/3/tv/${tvseriesId}/credits?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setSeriesCastDetails(data.cast);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tvseriesId]);

  return (
    <div className="seriesDetailsPage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>

        <div className="seriesDetails-section">
          <div className="seriesdetails-container">
            <img
              src={`${'https://image.tmdb.org/t/p/w500'}${
                seriesDetails.poster_path
              }`}
              className="moviedetail-img"
            />

            <h2 className="seriesdetail-title">{seriesDetails.name}</h2>
            <p className="series-tagline">{seriesDetails.tagline}</p>
            <p className="series-rating">
              {seriesDetails.vote_average > 1
                ? seriesDetails.vote_average.toFixed(1)
                : seriesDetails.vote_average}
            </p>
            <div className="length-ratings-container">
              <div className="inner-length-ratings-container">
                <p className="heading">Episodes</p>
                <p className="heading-data">
                  {seriesDetails.number_of_episodes}
                </p>
              </div>
              <div className="inner-length-ratings-container">
                <p className="heading">Language</p>
                <p className="heading-data">
                  {getLanguageName(seriesDetails.original_language)}
                </p>
              </div>{' '}
              <div className="inner-length-ratings-container">
                <p className="heading">Year</p>
                <p className="heading-data">
                  {typeof seriesDetails.first_air_date === 'string'
                    ? seriesDetails.first_air_date.substring(0, 4)
                    : 'N/A'}
                </p>
              </div>{' '}
              <div className="inner-length-ratings-container">
                <p className="heading">Status</p>
                <p className="heading-data">{seriesDetails.status}</p>
              </div>
            </div>

            <p className="seriesDetails-header">Genre </p>
            <div className="seriesDetails-genre-container">
              {Boolean(seriesDetails.genres) &&
                seriesDetails.genres.map((genre: any) => (
                  <Link
                    to={`/genre/${genre.id}`}
                    className="genres-list"
                    key={genre.id}
                  >
                    {genre.name}
                  </Link>
                ))}
            </div>

            <p className="seriesdetail-overview-container">Synopsis</p>
            <p className="seriesdetail-overview">{seriesDetails.overview}</p>

            <p className="cast-details-container">Cast</p>
            <div className="cast-details">
              {seriescastDetails.map((cast: any) => (
                <Link className="cast" key={cast.id} to={`/person/${cast.id}`}>
                  {cast.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
