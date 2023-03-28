/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import './Persondetail.css';
import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
  const { personId } = useParams<{ personId: string }>();
  const [personDetails, setPersonDetails]: any = React.useState([]);

  React.useEffect(() => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `https://api.themoviedb.org/3/person/${personId}?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setPersonDetails(data);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [personId]);

  return (
    <div className="castDetailsPage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container"></div>
        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies" />
        </div>

        <div className="castDetails-section">
          <div className="castdetails-container">
            <img
              src={`https://www.themoviedb.org/t/p/w500${personDetails.profile_path}`}
              className="castdetail-img"
            />

            <h2 className="castdetail-name">{personDetails.name}</h2>

            <div className="birth-details-container">
              <div className="birth-details">
                <p className="heading1">Date of birth</p>
                <p className="heading-data1">{personDetails.birthday}</p>
              </div>
              <div className="birth-details">
                <p className="heading1">Place of birth</p>
                <p className="heading-data1">{personDetails.place_of_birth}</p>
              </div>
            </div>

            <p className="castdetail-biography-container">Biography</p>
            <p className="castdetail-biography">{personDetails.biography}</p>

            <p className="knownfor-container">Known For</p>
            <p className="known-for">{personDetails.known_for_department}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
