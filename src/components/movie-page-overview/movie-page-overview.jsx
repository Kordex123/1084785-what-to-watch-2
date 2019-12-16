import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Namespace from "../../reducer/namespace";

const MoviePageOverview = ({filmsInformation: {director, starring, description, rating, scoresCount}}) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getMovieRatingDescription(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.map((actor) => (
          <React.Fragment key={actor}>{actor}<br/></React.Fragment>))}</strong></p>
      </div>
    </React.Fragment>
  );
};

const Ratings = {
  10: `awesome`,
  8: `very good`,
  5: `good`,
  3: `normal`,
  0: `bad`,
};

const getMovieRatingDescription = (rating) => {
  for (const ratingValue of Object.keys(Ratings).reverse()) {
    if (rating >= ratingValue) {
      return Ratings[ratingValue];
    }
  }
  return new Error(`Rating ${rating} is out of range`);
};

MoviePageOverview.propTypes = {
  filmsInformation: PropTypes.shape({
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
  }),
  filmId: PropTypes.number
};

const mapStateToProps = (state, {filmId}) => ({
  filmsInformation: state[Namespace.MOVIE].movieCards.find((movieCard) =>
    movieCard.id === parseInt(filmId, 10)),
});

export default connect(mapStateToProps)(MoviePageOverview);


