import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import BookmarkIcon from '../MovieCards/assets/BookmarkIcon.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import Profile from '../NavigationBar/assets/Profile.svg';
import './HomePage.css';
// import { data } from '../../data';
import { MovieCards } from '../MovieCards/MovieCards';
import { MovieTray } from '../MovieTray/MovieTray';
import axios from 'axios';
// import axios from 'axios';

// interface ButtonProps {
//   backgroundColor?: string;
//   color?:string;
//   label: string;
//   onClick?: () => void;
// }

export const HomePage = () => {
  // const [movieData, setMovieData] = React.useState([]);
  // const navigate = useNavigate();
  // const handleLogoutClick = () => {
  //   localStorage.removeItem('userdata');
  //   navigate('/');
  // };
  // const tokenData = localStorage.getItem('token');
  // const token = tokenData !== null ? tokenData : '';

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/movies?populate=*',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           Accept: 'application/json, text/plain, */*',
  //         },
  //       },
  //     )
  //     .then((response) => response.data.data)
  //     .then((data) => {
  //       // console.log(data);
  //       // console.log(data[0].attributes.Name);
  //       setMovieData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching movie data:', error);
  //     });
  // }, [token]);

  const userData = localStorage.getItem('userdata');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userDataObj = userData !== null ? JSON.parse(userData) : '';

  // console.log(movieData);

  const [populourMovies, setPopulourMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/movie/popular?api_key=0ddfe6bb88aaddb93e21726fd865a9dd&language=en-US&page=1`,
      )
      .then(({ data: { results } }) => {
        setPopulourMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="homepage-container">
      <NavigationBar />
      <div className="main-page-container">
        <div className="greeting-container">
          <img src={Profile} />
          <p>Hello, {userDataObj.user.username}</p>
        </div>

        <div className="search-bar-container-home">
          <SearchBar placeholder="Search for movies or TV series" />
        </div>
        <div className="trending-container">
          <p className="trending-text">Trending</p>
          <div className="movie-box">
            <p>Movie</p>
          </div>
        </div>

        <div className="movie-tray-container">
          <MovieTray />
        </div>
        <div className="popular-movie-container">
          <p className="trending-text">Popular</p>
          <div className="movie-box">
            <p>Movie</p>
          </div>
        </div>
        <div className="popular-moviecard-container">
          {populourMovies.map((movie: any, index: number) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            // <Link to={`/movies/${movie.id}`} key={movie.id} className='no-underline'>
            <div key={movie.id}>
              <MovieCards
                {...movie}
                genre="movies"
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                title={movie.title || movie.name}
                BookmarkIcon={BookmarkIcon}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                year={movie.release_date.substring(0, 4)}
                category={'Movie'}
              />
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
