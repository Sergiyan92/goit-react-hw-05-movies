import Searchbar from 'components/searchform/SearchForm';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'service/service';

const Movies = ({ place = '' }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setMoviesError] = useState(null);

  useEffect(() => {
    if (!query) return;
    try {
      const fetchMovies = async () => {
        const { movieData } = await getMovies(query);
        setMovies(prevMovies => [...prevMovies, ...movieData]);
      };
      fetchMovies();
    } catch (error) {
      setMoviesError(error.message);
    }
  }, [query]);

  const handleSubmit = query => {
    if (query === '') {
      alert('Please enter a query');
    } else {
      setQuery(query);
      setMovies([]);
    }
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={place ? `movies/${movie.id}` : `${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
      {error && <>Sorry. {error} ... 😭</>}
    </div>
  );
};
export default Movies;
