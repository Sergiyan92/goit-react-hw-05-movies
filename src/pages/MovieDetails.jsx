import CardItem from 'components/card/CardItem';
import { IfoItem } from 'components/info/IfoItem';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieId } from 'service/service';

const MoviesDetails = () => {
  const { movieID } = useParams;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getMovieId(movieID)
      .then(response => setDetails(response.data.results))
      .catch(error => console.log(error));
  }, [movieID]);
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
