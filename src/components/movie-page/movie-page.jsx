import React from 'react';
import Tabs from '../tabs/tabs.jsx';
import PropTypes from "prop-types";
import Namespace from "../../reducer/namespace";
import {connect} from "react-redux";
import MovieCardList from "../movie-card-list/movie-card-list.jsx";
import {Link} from "react-router-dom";

const MoviePage = (props) => {
  const {movieTitle, posterImage, backgroundImage, genre, released} = props.filmsInformation;
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={backgroundImage} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>

          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>

            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={posterImage} width="218" height="327"/>
            </div>
            <div className="movie-card__desc">
              <Tabs filmId={props.filmId} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieCardList limit={4} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  filmsInformation: PropTypes.shape({
    genre: PropTypes.string,
    released: PropTypes.number,
    movieTitle: PropTypes.string,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string,
  }),
  filmId: PropTypes.number
};

const mapStateToProps = (state, {match}) => ({
  filmsInformation: state[Namespace.MOVIE].movieCards.find((movieCard) =>
    movieCard.id === parseInt(match.params.id, 10)),
  filmId: parseInt(match.params.id, 10)
});

export default connect(mapStateToProps)(MoviePage);
