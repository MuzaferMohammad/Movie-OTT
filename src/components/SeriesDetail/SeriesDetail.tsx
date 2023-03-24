/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import './SeriesDetail.css';
import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { useParams } from 'react-router-dom';
const SeriesDetails = () => {
  const { tvseriesId } = useParams<{ tvseriesId: string }>();
  const [seriesDetails, setseriesDetails]: any = React.useState([]);

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
  }, [tvseriesId]);

  return (
    <div className="movieDetailsPage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>

        <div className="seriesDetails-section">
          <div className="seriesdetails-container">
            {/* <p className="series-rating">{seriesDetails.vote_average}</p> */}

            <div className="length-ratings-container">
              <div className="inner-length-ratings-container">
                <p className="heading">Episodes</p>
                <p className="heading-data">
                  {typeof seriesDetails.number_of_episodes === 'number'
                    ? `${seriesDetails.number_of_episodes}`
                    : 'N/A'}
                </p>
              </div>
              <div className="inner-length-ratings-container">
                <p className="heading">Language</p>
                <p className="heading-data">
                  {seriesDetails.original_language}
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
            <img
              src={`${'https://image.tmdb.org/t/p/w500'}${
                seriesDetails.poster_path
              }`}
              className="seriesdetail-img"
            />
            <h2 className="seriesdetail-title">{seriesDetails.name}</h2>

            <p className="seriesdetail-overview-container">Synopsis</p>
            <p className="seriesdetail-overview">{seriesDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
