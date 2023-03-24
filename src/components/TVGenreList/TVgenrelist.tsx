import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieCards } from '../MovieCards/MovieCards';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import './TVgenrelist.css';

export const TVGenreList = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const [tvseries, setTvSeries] = React.useState([]);

  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/discover/tv?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${seriesId}`,
    )
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => response.json())
      .then((data) => {
        setTvSeries(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [seriesId]);

  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for series" />
        </div>

        <div className="tvgenre-list">
          {tvseries.map((series: any) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

            <MovieCards
              {...series}
              key={series.id}
              id={series.id}
              genre="series"
              category="TV"
              className="movie-cards"
              year={series.first_air_date.substring(0, 4)}
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              poster={`${'https://image.tmdb.org/t/p/w500'}${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                series.poster_path
              }`}
              title={series.name}
              BookmarkIcon={BookmarkIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
