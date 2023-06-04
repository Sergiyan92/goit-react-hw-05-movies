// import { useState } from 'react';

// import { useEffect } from 'react';

const Home = () => {
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     const fetch = require('node-fetch');
  //     const url =
  //       'https://api.themoviedb.org/3/account/19830737/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc',
  //       },
  //     };

  //     fetch(url, options)
  //       .then(res => res.json())
  //       .then(json => console.log(json))
  //       .catch(err => console.error('error:' + err));
  //   }, []);
  return (
    <div>
      <h1>Home</h1>
      {/* <ul>{movies.map(({ title }) => ({ title }))}</ul> */}
    </div>
  );
};
export default Home;
