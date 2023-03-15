import React from 'react';
// import axios from 'axios';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import searchIcon from './searchIcon.svg';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
// import { SearchResults } from '../SearchResults/SearchResults';

interface SearchBarInterface {
  label?: string;
  handleSearchInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  inputText?: string;
  handleSearchError?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  placeholder,
  label,
  inputText,
}: SearchBarInterface) => {
  const [searchInput, setSearchInput] = React.useState('');
  // const [results, setResults] = React.useState([]);
  const navigate = useNavigate();

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForFullName = /^[A-Za-z0-9\s]*$/;
    if (
      event.target.value === '' ||
      regexForFullName.test(event.target.value)
    ) {
      setSearchInput(event.target.value);
    }
  }

  // async function handleSearchClick() {
  //   // alert('Searching movies');
  //   try {
  //     const result = await axios.get(
  //       `https://api.themoviedb.org/3/search/multi?query=${searchInput}&api_key=13622fc50c5257d370284ea008163f90`,
  //     );
  //     console.log(result);
  //     setResults(result.data.results);
  //   } catch (error) {
  //     console.log(error);
  //     // display error message to user
  //   }
  // }
  // console.log(results);

  function handleSearchClick() {
    // alert('Searching movies');
    navigate(`/search/${searchInput}`);
  }

  return (
    <div className="search-bar-container">
      <img src={searchIcon} alt="search-icon" />
      <div className="input-field-search-bar">
        <InputTextField
          className="search-input"
          placeholder={placeholder}
          inputText={searchInput}
          handleText={handleSearchInput}
        />
      </div>
      <div className="search-button-container">
        <Button
          className="search-button"
          label={'Search'}
          onClick={handleSearchClick}
        />
      </div>
      {/* 
      {results.length > 0 && (
        <section className="searchResult-container">
          {results.length > 0 ? (
            <SearchResults results={results} />
          ) : (
            <p>No results found</p>
          )}
        </section>
      )} */}
    </div>
  );
};
