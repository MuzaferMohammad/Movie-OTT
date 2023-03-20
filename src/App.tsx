import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/SignupPage/Signup';
import { SignInPage } from './components/SignInPage/SignInPage';
import { HomePage } from './components/HomePage/HomePage';
import { NoResults } from './components/NoResults/NoResults';
import { BookmarksPage } from './components/BookmarksPage/BookmarksPage';
// import MovieGenre from './components/MovieGenre/Moviegenre';
// import { MovieGenreList } from './components/MoviegenreList/MoviegenreList';
// import TVGenre from './components/TVSeriesGenre/TVgenre';
// import MovieDetails from './components/MovieDetail/Moviedetail';
// import { TVGenreList } from './components/TVGenreList/TVgenrelist';
// import { SearchResult } from './components/SearchResult/SearchResult';

function App() {
  const userData = localStorage.getItem('userdata');
  // const resultLength = localStorage.getItem('resultLength');
  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SignInPage />} />{' '} */}
          <Route
            path="/"
            element={userData !== null ? <HomePage /> : <SignInPage />}
          />
          <Route path="Signup" element={<RegisterPage />} />
          <Route path="home" element={<HomePage />} />{' '}
          <Route path="no-results" element={<NoResults />} />{' '}
          <Route path="bookmarks" element={<BookmarksPage />} />
          {/* <Route path="movie-genres" element={<MovieGenre />} />
          <Route path="/genre/:genreId" element={<MovieGenreList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
          {/* <Route path="TVGenre" element={<TVGenre />} />
          <Route path="/genre/:genreId" element={<TVGenreList />} />
          <Route path="/search/:searchQuery" element={<SearchResult />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
