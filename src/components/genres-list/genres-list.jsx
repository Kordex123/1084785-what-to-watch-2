import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducer/reducer';
import PropTypes from "prop-types";

const GenresList = (props) => {

  const genres = Object.values(props.genres).map((filmGenre) => {
    return (
      <li key={filmGenre} className="catalog__genres-item">
        <a style={{cursor: `pointer`}} className="catalog__genres-link" onClick={() => props.setGenre(filmGenre)}>{filmGenre}</a>
      </li>
    );
  });

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a style={{cursor: `pointer`}} className="catalog__genres-link" onClick={() => props.setGenre(null)}>All genres</a>
      </li>
      {genres}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  setGenre: PropTypes.func
};

const mapStateToProps = (state) => ({
  genres: Array.from(new Set(state.movieCards.map((movieCard) => movieCard.genre)))
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(ActionCreator.setGenre(genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
