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

export const SearchBar = ({ placeholder }: SearchBarInterface) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchInputError, setSearchInputError] = React.useState('');

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

  function handleSearchClick() {
    // alert('Searching movies');
    searchInput !== ''
      ? navigate(`/search/${searchInput}`)
      : setSearchInputError('Enter a valid input');
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
          error={searchInputError}
        />
      </div>
      <div className="search-button-container">
        <Button
          className="search-button"
          label={'Search'}
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
};
