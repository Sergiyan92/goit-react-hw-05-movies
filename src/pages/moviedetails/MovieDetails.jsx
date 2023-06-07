import CardItem from 'components/card/CardItem';
import { IfoItem } from 'components/info/IfoItem';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieId } from 'service/service';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getMovieId(movieId)
      .then(data => setDetails(data))
      .catch(error => console.log(error));
  }, [movieId]);
  if (!details) return;
  return (
    <div>
      <Link to="/">Back</Link>
      <CardItem card={details} />
      <IfoItem />

      <Outlet />
    </div>
  );
};
export default MoviesDetails;
