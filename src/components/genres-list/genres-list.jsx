import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducer/reducer';
import PropTypes from "prop-types";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const GenresList = (props) => {

  const genres = Object.values([`All genres`].concat(props.genres)).map((filmGenre) => {
    return (
      <li key={filmGenre} className={`catalog__genres-item ${props.activeItem === filmGenre ? `catalog__genres-item--active` : ``}`}>
        <a style={{cursor: `pointer`}} className="catalog__genres-link" onClick={() => onGenreClickHandler(filmGenre)}>{filmGenre}</a>
      </li>
    );
  });

  const onGenreClickHandler = (genre) => {
    props.onActiveItemChange(genre);
    props.setGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres}
    </ul>
  );
};

GenresList.defaultProps = {
  activeItem: `All genres`,
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  setGenre: PropTypes.func,
  onActiveItemChange: PropTypes.func,
  activeItem: PropTypes.string,
};

const mapStateToProps = (state) => ({
  genres: Array.from(new Set(state.movieCards.map((movieCard) => movieCard.genre)))
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(ActionCreator.setGenre(genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(GenresList));
