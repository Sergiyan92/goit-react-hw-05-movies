import Searchbar from 'components/searchform/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from 'service/service';
import css from './Movies.module.css';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setMoviesError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (!query) return;
    try {
      const fetchMovies = async () => {
        const { movieData } = await getMovies(query);
        setMovies(() => [...movieData]);
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
      setSearchParams({ query });
      setMovies([]);
    }
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      {error && <>Sorry. {error} ... 😭</>}
    </div>
  );
};
export default Movies;
