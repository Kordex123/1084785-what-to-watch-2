import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCard = ({film, onHover, isPlaying}) => {
  const {id, movieTitle} = film;
  return (
    <article key={id}
      className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`}>
        <div className="small-movie-card__image">
          <VideoPlayer film={film} isPlaying={isPlaying} onHover={onHover}/>
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">
          {movieTitle}
        </Link>
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
