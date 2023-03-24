import React from 'react';
import arrowBack from './assets/arrowBack.svg';
import './NoResults.css';

interface errorProps {
  searchInput?: string;
}

export const NoResults = ({ searchInput }: errorProps) => {
  // const errorMessage = `No Results found for the search ${ searchInput }`;

  // const [showNoResults, setShowNoResults] = React.useState(false);

  // React.useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowNoResults(true);
  //   }, 400);
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <div className="no-results-container">
      <div className="inner-no-results-container">
        <a className="back-button" href="/">
          <img src={arrowBack} alt="arrow-back" />
        </a>
        <p>No Results found for the search ‘{searchInput}’</p>
      </div>
    </div>
  );
};
