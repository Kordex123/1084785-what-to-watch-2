import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card";

configure({adapter: new Adapter()});

it(`MovieCard (e2e) is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const movieCard = shallow(<MovieCard
    filmTitles={[`Alla has a parrot`, `Peter has a fish`]}
    onClick={clickHandler}
  />);
  // movieCard.find(`a`).at(0).simulate(`click`);
  // expect(clickHandler).toHaveBeenCalledTimes(1);

  movieCard.find(`a`).forEach((titleLink) => titleLink.simulate(`click`));
  expect(clickHandler).toHaveBeenCalledTimes(2);
});

