/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import './MovieCards.css';
import MovieCardIcon from './assets/MovieCardIcon.svg';
import BookmarkOn from './assets/BookmarkOn.svg';
import BookmarkOff from './assets/BookmarkOff.svg';
import { Link } from 'react-router-dom';

interface MovieCardInterface {
  poster?: string;
  year?: number;
  category?: string;
  title?: string;
  id?: number;
  genre?: string;
  rating?: string;
  description?: string;
  isBookmarked?: boolean;
  isTrending?: boolean;
  className?: string;
  BookmarkIcon?: string;
}

export const MovieCards = ({
  poster,
  year,
  id,
  genre,
  category,
  title,
  BookmarkIcon,
}: MovieCardInterface) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  React.useEffect(() => {
    const storedValue = localStorage.getItem(`movie-${id}`);
    if (storedValue === 'true') {
      setIsBookmarked(true);
    }
  }, [id]);

  function handleBookmarkIconClick() {
    setIsBookmarked(!isBookmarked);
    localStorage.setItem(`movie-${id}`, String(!isBookmarked));
  }

  return (
    <div className="movie-cards">
      {/* <a href="movie-details"> */}
      <Link to={`/${genre}/${id}`}>
        <img src={poster} alt="poster" className="poster" />
      </Link>{' '}
      {/* </a> */}
      <button
        className="movieCard-container__bookmark__button"
        onClick={handleBookmarkIconClick}
      >
        <img
          className="movieCard-container__icon"
          src={isBookmarked ? BookmarkOn : BookmarkOff}
        />
      </button>
      <div className="movie-data">
        <p>{year}</p>
        {/* <object data={dotIcon} type="" className="dot-icon"></object> */}
        <object
          data={MovieCardIcon}
          type=""
          className="movie-card-icon"
        ></object>
        <p>{category}</p>
      </div>
      <p className="movie-title">{title}</p>
    </div>
  );
};
