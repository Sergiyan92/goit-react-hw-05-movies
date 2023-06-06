import defaultImg from '../../data/default.png';

const CardItem = ({ card }) => {
  return (
    <div>
      <img
        src={
          card.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${card.backdrop_path}`
            : defaultImg
        }
        alt={card.original_title}
      />
      <h3>{card.original_title}</h3>

      <div>
        <h4>Overview</h4>
        <p>{card.overview}</p>
      </div>
      <div>
        <h4>Genres</h4>
        <ul>
          {card.genres?.map((genre, ind) => (
            <span key={ind}>{genre.name}</span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
