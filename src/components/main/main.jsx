import React from 'react';
import MovieCardList from "../movie-card-list/movie-card-list.jsx";
import PageLogo from "../page-logo/page-logo.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import {Link} from "react-router-dom";

const Main = () => {

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <PageLogo />

          <div className="user-block">
            <Link to={`/login`}>
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </Link>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <div className="catalog">
          <h2 className="catalog__title visually-hidden"> Catalog </h2>

          <GenresList />
          <MovieCardList limit={8} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </div>

        <footer className="page-footer">
          <PageLogo isLight={true} />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// <a className="logo__link logo__link--light">

export default Main;
