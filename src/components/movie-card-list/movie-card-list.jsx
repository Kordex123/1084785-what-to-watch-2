import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Namespace from "../../reducer/namespace";

class MovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.onPreviewMoviePlay = (film) => {
      props.onActiveItemChange(film);
    };
  }
  render() {
    const {filmsInformation, activeItem, limit} = this.props;
    const films = filmsInformation.slice(0, limit || filmsInformation.length).map((film) => {
      return (
        <MovieCard key={film.id}
          film = {film}
          isPlaying={activeItem && activeItem.id === film.id}
          onHover={this.onPreviewMoviePlay}/>
      );
    });

    return (
      <div className="catalog__movies-list">
        {films}
      </div>
    );
  }
}

MovieCardList.propTypes = {
  filmsInformation: PropTypes.arrayOf(PropTypes.object),
  onActiveItemChange: PropTypes.func,
  activeItem: PropTypes.object,
  limit: PropTypes.number
};

const mapStateToProps = (state) => ({
  filmsInformation: state[Namespace.MOVIE].movieCards.filter((movieCard) =>
    state[Namespace.GENRE].genre === `All genres` || movieCard.genre === state[Namespace.GENRE].genre)
});

export default connect(mapStateToProps)(withActiveItem(MovieCardList));
