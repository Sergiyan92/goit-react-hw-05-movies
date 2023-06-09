// import PropTypes from 'prop-types';
import defaultImg from '../../data/noicon.png';
import css from './CastItem.module.css';
import PropTypes from 'prop-types';
const CastItem = ({ cast }) => {
  return (
    <div className={css.item}>
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

CastItem.propTypes = {
  cast: PropTypes.object.isRequired,
};

export default CastItem;
