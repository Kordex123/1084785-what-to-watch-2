import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCard = ({film, onHover, isPlaying}) => {
  const {id, movieTitle} = film;
  return (
    <article key={id}
      className="small-movie-card catalog__movies-card">
      <VideoPlayer film={film} isPlaying={isPlaying} onHover={onHover}/>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html">
          {movieTitle}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    movieTitle: PropTypes.string,
  }),
  onHover: PropTypes.func,
  isPlaying: PropTypes.bool
};

export default MovieCard;
