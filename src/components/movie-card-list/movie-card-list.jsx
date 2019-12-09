import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card.jsx";
import {connect} from "react-redux";

class MovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.onPreviewMoviePlay = (film) => {
      this.setState(() => {
        // eslint-disable-next-line no-console
        console.log(film);
        return {
          activeCard: film
        };
      });
    };
  }
  render() {
    const {filmsInformation} = this.props;
    const films = filmsInformation.map((film) => {
      return (
        <MovieCard key={film.id}
          film = {film}
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
  filmsInformation: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => ({
  filmsInformation: state.movieCards.filter((movieCard) => state.genre === null || movieCard.genre === state.genre)
});

export default connect(mapStateToProps)(MovieCardList);
