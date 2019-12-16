import React from 'react';
import PropTypes from "prop-types";
import Namespace from "../../reducer/namespace";
import {connect} from "react-redux";

const MoviePageDetails = ({filmsInformation}) => {
  const {director, starring, runTime, genre, released} = filmsInformation;
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((actor) => (<React.Fragment key={actor}>{actor}<br/></React.Fragment>))}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

MoviePageDetails.propTypes = {
  filmsInformation: PropTypes.shape({
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
  }),
  filmId: PropTypes.number
};


const mapStateToProps = (state, {filmId}) => ({
  filmsInformation: state[Namespace.MOVIE].movieCards.find((movieCard) =>
    movieCard.id === parseInt(filmId, 10)),
});

export default connect(mapStateToProps)(MoviePageDetails);
