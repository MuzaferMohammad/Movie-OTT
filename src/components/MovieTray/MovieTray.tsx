import React from 'react';
// import { data } from '../../MovieData';
import './MovieTray.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import { MovieCard } from '../MovieCards/MovieCards.stories';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export const MovieTray = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=0ddfe6bb88aaddb93e21726fd865a9dd`,
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
        {movies.map((movie: any, index: number) => (
          // <Link to={`/movies/${movie.id as number}`} key={movie.id} className='no-underline'>
          <div key={movie.id}>
            <MovieCard
              {...movie}
              className="movie-cards-carousel"
              genre="movies"
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              title={movie.title || movie.name}
              category={'Movie'}
              BookmarkIcon={BookmarkIcon}
              year={
                typeof movie.release_date === 'string'
                  ? movie.release_date.substring(0, 4)
                  : 'N/A'
              }
            />
          </div>
          //  </Link>
        ))}
      </Carousel>
    </div>
  );
};
