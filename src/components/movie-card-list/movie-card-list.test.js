import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import MovieCardList from "./movie-card-list";
import films from "../../mocks/films";
import configureStore from "redux-mock-store";
import Namespace from "../../reducer/namespace";

it(`MovieCardList correctly renders after relaunch`, () => {

  const mockStore = configureStore([]);
  let store = mockStore({
    [Namespace.MOVIE]: {
      movieCards: films,
    },
    [Namespace.GENRE]: {
      genre: films[0].genre,
    }
  });

  // eslint-disable-next-line no-console
  console.log(`---------------------`);
  // eslint-disable-next-line no-console
  console.log(store.getState());
  // eslint-disable-next-line no-console
  console.log(`---------------------`);

  const onHover = jest.fn();
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCardList onHover={onHover}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
