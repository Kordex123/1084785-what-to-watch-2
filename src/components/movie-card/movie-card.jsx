import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({filmTitles, onClick}) => {
  let a = 61;
  const cards = filmTitles.map((filmTitle) => {
    a += 1;
    const id = `\\x${a}`;
    const imageName = filmTitle.replace(/:/g, ``).replace(/ /g, `-`);
    return (
      <article key={id}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img
            src={`img/${imageName}.jpg`}
            alt={`${filmTitle}`}
            width="280"
            height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html" onClick={onClick}>
            {filmTitle}
          </a>
        </h3>
      </article>
    );
  });
  return (
    <div className="catalog__movies-list">
      {cards}
    </div>
  );
};

MovieCard.propTypes = {
  filmTitles: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default MovieCard;
