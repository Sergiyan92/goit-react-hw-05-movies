import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllmovies } from 'service/service';

const Trending = ({ place = '' }) => {
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
    <ul>
      {trending.map(movie => (
        <li key={movie.id}>
          <Link to={place ? `movies/${movie.id}` : `${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
      {error && <>Sorry. {error} ... 😭</>}
    </ul>
  );
};
export default Trending;
