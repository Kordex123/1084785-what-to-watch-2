import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

class MovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.onPreviewMoviePlay = (filmId) => {
      props.onActiveItemChange(filmId);
    };
  }
  render() {
    const {filmsInformation, activeItem} = this.props;
    const films = filmsInformation.map((film) => {
      return (
        <MovieCard key={film.id}
          film = {film}
          isPlaying={activeItem === film.id}
          onHover={this.onPreviewMoviePlay}/>
      );
    });

    return (
      <div className="catalog__movies-list">
        { /* <div>{this.state.activeCard && this.state.activeCard.movieTitle}</div> */ }
        {films}
      </div>
    );
  }
}

MovieCardList.propTypes = {
  filmsInformation: PropTypes.arrayOf(PropTypes.object),
  onActiveItemChange: PropTypes.func,
  activeItem: PropTypes.number,
};

const mapStateToProps = (state) => ({
  filmsInformation: state.movieCards.filter((movieCard) => state.genre === `All genres` || movieCard.genre === state.genre)
});

export default connect(mapStateToProps)(withActiveItem(MovieCardList));
