/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import './MovieCards.scss';
import MovieCardIcon from './assets/MovieCardIcon.svg';
import TVSeriesIcon from './assets/TVSeriesIcon.svg';
import BookmarkOn from './assets/BookmarkOn.svg';
import dotIcon from './assets/dotIcon.svg';
import BookmarkOff from './assets/BookmarkOff.svg';
import { Link } from 'react-router-dom';

export interface MovieCardInterface {
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
  className,
  BookmarkIcon,
}: MovieCardInterface) => {
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>(() => {
    // get the value of the 'Bookmarks' key from localStorage
    //  If the value is not found set it as an empty array ([]).
    const bookmarks = JSON.parse(localStorage.getItem('Bookmarks') ?? '[]');
    return bookmarks.some((bookmark: { id: number }) => bookmark.id === id);
    // checks whether the id property of an element in the bookmarks
    // array matches the id variable passed into the component.
  });
  // console.log(isBookmarked);

  function handleBookmarkIconClick() {
    setIsBookmarked(!isBookmarked);
    const movieCardData = {
      poster,
      year,
      category,
      title,
      id,
      genre,
      BookmarkIcon,
      isBookmarked: !isBookmarked, // toggle the bookmark status
    };

    // get Bookmarks key from the localstorage
    //  If the value is not found set it as an empty array ([]).
    let bookmarks = JSON.parse(localStorage.getItem('Bookmarks') ?? '[]');
    if (!isBookmarked) {
      bookmarks.push(movieCardData); // add the new bookmarked item
    } else {
      bookmarks = bookmarks.filter(
        (bookmark: { id: number }) => bookmark.id !== id,
      ); // remove the un-bookmarked item from the bookmarks

      // window.location.reload();

      // Find the HTML element that represents the bookmarked item
      const bookmarkedItem = document.getElementById(`bookmark-${id}`);
      // If the bookmarked item exists in the UI, remove it from the DOM

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (bookmarkedItem) {
        bookmarkedItem.remove();
      }
    }
    localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
  }

  return (
    <div className={className}>
      <Link to={`/${genre}/${id}`}>
        <img src={poster} alt="poster" className={`${className}__poster`} />
      </Link>{' '}
      <button
        className={`${className}__bookmark-button`}
        onClick={handleBookmarkIconClick}
      >
        <img
          className={`${className}__icon`}
          src={isBookmarked ? BookmarkOn : BookmarkOff}
        />
      </button>
      <div className={`${className}__movie-data`}>
        <p>{year}</p>
        <object
          data={dotIcon}
          type=""
          className="movie-cards__movie-data__dot-icon"
        ></object>
        <object
          data={genre === 'movies' ? MovieCardIcon : TVSeriesIcon}
          type=""
          className={`${className}__movie-data-icon`}
        ></object>
        <p>{category}</p>
      </div>
      <p className={`${className}__title`}>{title}</p>
    </div>
  );
};
