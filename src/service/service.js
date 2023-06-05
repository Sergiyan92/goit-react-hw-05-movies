import axios from 'axios';

export const getMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    params: {
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc',
    },
  };
  const response = await axios(options);
  const movies = response.data.results;
  return {
    movieData: movies.map(({ id, title }) => ({ id, title })),
  };
};
