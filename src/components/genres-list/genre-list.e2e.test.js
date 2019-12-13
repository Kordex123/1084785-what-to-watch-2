import React from 'react';
import {Provider} from 'react-redux';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenresList from "./genres-list";
import configureStore from "redux-mock-store";
import films from "../../mocks/films";

configure({adapter: new Adapter()});

it(`GenreList (e2e) is correctly rendered after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    genre: null,
    movieCards: films,
  });

  const component = mount(
      <Provider store={store}>
        <GenresList />
      </Provider>
  );
  component.find(`li a`).at(2).simulate(`click`);
  // eslint-disable-next-line no-console
  console.log(component.debug());

  expect(component.find(`li`).at(0).hasClass(`catalog__genres-item--active`)).toBeFalsy();
  expect(component.find(`li`).at(2).hasClass(`catalog__genres-item--active`)).toBeTruthy();
});
