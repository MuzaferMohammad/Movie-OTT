/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import './MovieTray.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import { MovieCard } from '../MovieCards/MovieCards.stories';
import axios from 'axios';

export const MovieTray = () => {
  const [movies, setMovies] = React.useState([]);

  const apiKey = process.env.REACT_APP_OTT_API_KEY;
  // get trending movies
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?page=4&api_key=${apiKey}`,
      )
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="cerousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        interval={5000}
        stopOnHover
      >
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard
              {...movie}
              className="movie-cards-carousel"
              genre="movies"
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              poster={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.poster_path}`}
              title={movie.title}
              category={'Movie'}
              BookmarkIcon={BookmarkIcon}
              year={
                typeof movie.release_date === 'string'
                  ? movie.release_date.substring(0, 4)
                  : 'N/A'
              }
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
