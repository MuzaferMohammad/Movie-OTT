import React from 'react';
import arrowBack from './arrowBack.svg';
import './NoResults.css';

interface errorProps {
  searchInput?: string;
}

export const NoResults = ({ searchInput }: errorProps) => {
  const errorMessage = `No Results found for the search`;

  return (
    <div className="no-results-container">
      <div className="inner-no-results-container">
        <a className="back-button" href="home">
          <img src={arrowBack} alt="arrow-back" />
        </a>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};
