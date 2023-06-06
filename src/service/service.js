//developer.themoviedb.org/docs/image-basics
import axios from 'axios';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc',
  },
};
export const getMovies = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios(url, options);
  const movies = response.data.results;
  // console.log(movies);
  return {
    movieData: movies.map(({ id, title }) => ({ id, title })),
  };
};

export const getAllmovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const response = await axios(url, options);
  const trending = response.data.results;
  // console.log(trending);
  return {
    trendingData: trending.map(({ id, title }) => ({ id, title })),
  };
};

export const getMovieId = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const response = await axios(url, options);
  const movieId = response.data.results;
  console.log(movieId);
  return movieId;
};

export const getCredits = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const response = await axios(url, options);
  const credits = response.data.results;
  return credits;
};

export const getMovieIdReviews = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const response = await axios(url, options);
  const reviews = response.data.results;
  return reviews;
};
