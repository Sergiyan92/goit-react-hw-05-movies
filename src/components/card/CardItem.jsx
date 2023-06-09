import defaultImg from '../../data/default.png';
import css from './Carditem.module.css';
import PropTypes from 'prop-types';
const CardItem = ({ card }) => {
  return (
    <div className={css.carditem}>
      <img
        className={css.img}
        src={
          card.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${card.backdrop_path}`
            : defaultImg
        }
        alt={card.original_title}
      />
      <div className={css.info}>
        <h3>{card.original_title}</h3>

        <div>
          <h4>Overview</h4>
          <p>{card.overview}</p>
        </div>
        <div>
          <h4>Genres</h4>
          <ul className={css.list}>
            {card.genres?.map((genre, index) => (
              <p key={index}>{genre.name}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};
