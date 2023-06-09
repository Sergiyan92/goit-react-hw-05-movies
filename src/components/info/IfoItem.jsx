import { Link } from 'react-router-dom';
import css from './Infoitem.module.css';
export const IfoItem = () => {
  return (
    <div>
      <h4>Additional information</h4>
      <ul className={css.info}>
        <Link className={css.button} to="cast">
          Cast
        </Link>
        <Link className={css.button} to="reviews">
          Reviews
        </Link>
      </ul>
    </div>
  );
};
