import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/SignupPage/Signup';
import { SignInPage } from './components/SignInPage/SignInPage';
import { HomePage } from './components/HomePage/HomePage';
import { NoResults } from './components/NoResults/NoResults';
import { BookmarksPage } from './components/BookmarksPage/BookmarksPage';
import MovieGenre from './components/MovieGenre/Moviegenre';
import { MovieGenreList } from './components/MoviegenreList/MoviegenreList';
import TVGenre from './components/TVSeriesGenre/TVgenre';
import MovieDetails from './components/MovieDetail/Moviedetail';
import { TVGenreList } from './components/TVGenreList/TVgenrelist';
import { SearchResult } from './components/SearchResult/SearchResult';
import SeriesDetails from './components/SeriesDetail/SeriesDetail';
import PersonDetails from './components/PersonDetails/Persondetail';
import ScrollToTop from './components/ScrollComponent/ScrollComponent';

function App() {
  const userData = localStorage.getItem('userdata');

  return (
    <div className="App-container">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={userData !== null ? <HomePage /> : <SignInPage />}
          />
          <Route path="Signup" element={<RegisterPage />} />
          <Route path="home" element={<HomePage />} />{' '}
          <Route
            path="no-results"
            element={userData !== null ? <NoResults /> : <SignInPage />}
          />{' '}
          <Route
            path="bookmarks"
            element={userData !== null ? <BookmarksPage /> : <SignInPage />}
          />
          <Route
            path="movie-genres"
            element={userData !== null ? <MovieGenre /> : <SignInPage />}
          />
          <Route
            path="/genre/:genreId"
            element={userData !== null ? <MovieGenreList /> : <SignInPage />}
          />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/series/:tvseriesId" element={<SeriesDetails />} />
          <Route
            path="TVGenre"
            element={userData !== null ? <TVGenre /> : <SignInPage />}
          />
          <Route
            path="/serie/:seriesId"
            element={userData !== null ? <TVGenreList /> : <SignInPage />}
          />
          <Route path="/search/:searchQuery" element={<SearchResult />} />
          <Route path="/person/:personId" element={<PersonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
