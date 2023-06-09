import CardItem from 'components/card/CardItem';
import { IfoItem } from 'components/info/IfoItem';
import { useEffect, useRef, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieId } from 'service/service';
import css from './MovieDetails.module.css';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  const location = useLocation();
  const back = useRef(location.state ?? '/');

  useEffect(() => {
    getMovieId(movieId)
      .then(data => setDetails(data))
      .catch(error => console.log(error));
  }, [movieId]);
  if (!details) return;
  return (
    <div>
      <Link className={css.button} to={back.current}>
        Back
      </Link>
      <CardItem card={details} />
      <IfoItem />

      <Outlet />
    </div>
  );
};
export default MoviesDetails;
