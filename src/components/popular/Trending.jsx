import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllmovies } from 'service/service';
import css from './Trending.module.css';
const Trending = () => {
  const [error, setMoviesError] = useState(null);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const { trendingData } = await getAllmovies();
        setTrending(() => [...trendingData]);
      };
      fetchMovies();
    } catch (error) {
      setMoviesError(error.message);
    }
  }, []);
  return (
    <ul className={css.list}>
      {trending.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      {error && <>Sorry. {error} ... 😭</>}
    </ul>
  );
};
export default Trending;
