// import PropTypes from 'prop-types';
import defaultImg from '../../data/noicon.png';
import css from './CastItem.module.css';
const CastItem = ({ cast }) => {
  return (
    <div>
      <img
        className={css.image}
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
            : defaultImg
        }
        alt={cast.name}
      />
      <h3>{cast.name}</h3>
      <span>Character: {cast.character}</span>
    </div>
  );
};

// CastItem.propTypes = {};

export default CastItem;
