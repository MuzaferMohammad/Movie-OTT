/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import './MovieCards.css';
import MovieCardIcon from './assets/MovieCardIcon.svg';
// import BGcircle from './BGcircle.svg';
import bookmarkedIcon from './assets/bookmarkedIcon.svg';
import dotIcon from './assets/dotIcon.svg';
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

  function handleBookmarkIconClick() {
    setIsBookmarked(!isBookmarked);
  }

  return (
    <div className="movie-cards">
      {/* <a href="movie-details"> */}
      {/* <Link to={`/movieDetails/${id}`} ></Link> */}
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
          src={isBookmarked ? bookmarkedIcon : BookmarkIcon}
        />
      </button>
      <div className="movie-data">
        <p>{year}</p>
        <object data={dotIcon} type="" className="dot-icon"></object>
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
