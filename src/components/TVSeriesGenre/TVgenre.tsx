import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './TVgenre.css';

const TVGenre = () => {
  const [series, setSeries] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="movieGenres-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for series" />
        </div>
        <div className="tvgenre-section">
          <div className="tv-genre">
            {series.map((serie: any, index) => (
              <Link
                key={index}
                className={`tvgenre-link ${index % 2 === 0 ? 'even' : 'odd'}`}
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                to={`/serie/${serie.id}`}
              >
                {serie.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVGenre;
