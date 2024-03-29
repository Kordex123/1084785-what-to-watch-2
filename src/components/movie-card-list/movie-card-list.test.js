import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import MovieCardList from "./movie-card-list";
import films from "../../mocks/films";
import configureStore from "redux-mock-store";
import Namespace from "../../reducer/namespace";
import {BrowserRouter} from "react-router-dom";

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

  const onHover = jest.fn();
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MovieCardList onHover={onHover}/>
          </BrowserRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
