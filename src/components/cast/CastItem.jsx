// import PropTypes from 'prop-types';
import defaultImg from '../../data/noicon.png';
const CastItem = ({ cast }) => {
  return (
    <div>
      <img
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
