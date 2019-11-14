import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({film, onHoverPreviewMoviePlay}) => {
  return (
    <article key={film.id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onHoverPreviewMoviePlay(film)}>
      <div className="small-movie-card__image">
        <img
          src={`img/${film.previewMovieImage}`}
          alt={`${film.movieTitle}`}
          width="280"
          height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html">
          {film.movieTitle}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    movieTitle: PropTypes.string,
    previewMovieImage: PropTypes.string,
  }),
  onHoverPreviewMoviePlay: PropTypes.func,
};

export default MovieCard;
