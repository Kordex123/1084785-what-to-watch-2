import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card";
import films from "../../mocks/films";

configure({adapter: new Adapter()});

it(`MovieCard (e2e) is correctly rendered after relaunch`, () => {

  // const clickHandler = jest.fn();
  const hoverHandler = jest.fn();
  const movieCard = shallow(<MovieCard
    film={films[4]}
    onHover={hoverHandler}
  />);
  // movieCard.find(`a`).at(0).simulate(`click`);

  const article = movieCard.find(`.small-movie-card`);
  article.simulate(`mouseover`);
  expect(hoverHandler).toHaveBeenCalledTimes(1);
});

