import React from 'react';
import PropTypes from 'prop-types';
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";

const TabsNames = [
  `Overview`,
  `Details`,
  `Reviews`,
];

const Tabs = (props) => {
  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TabsNames.map((name) => (<React.Fragment key={name}>
            <li className={`movie-nav__item ${props.activeItem === {name} ? `movie-nav__item--active` : ``}`}>
              <a className="movie-nav__link" onClick={(event) => clickActiveTab(event, () => props.onActiveItemChange(name))}>{name}</a>
            </li>
          </React.Fragment>))}
        </ul>
      </nav>
      {renderActiveTab(props.activeItem, props.filmId)}
    </React.Fragment>
  );
};

const renderActiveTab = (activeItem = `Overview`, filmId) => {
  switch (activeItem) {
    case `Overview`: return <MoviePageOverview filmId={filmId}/>;
    case `Details`: return <MoviePageDetails filmId={filmId} />;
    case `Reviews`: return <MoviePageReviews filmId={filmId} />;
    default: return null;
  }
};

const clickActiveTab = (event, onActiveItemChange) => {
  event.preventDefault();
  onActiveItemChange();
};

Tabs.propTypes = {
  activeItem: PropTypes.string,
  onActiveItemChange: PropTypes.func,
  filmId: PropTypes.number,
};
export default withActiveItem(Tabs);
