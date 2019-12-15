import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Main from "./main.jsx";
import {Provider} from 'react-redux';
import Namespace from "../../reducer/namespace";
import films from "../../mocks/films";
import {BrowserRouter} from "react-router-dom";

it(`Main correctly renders after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    [Namespace.MOVIE]: {
      movieCards: films,
    },
    [Namespace.GENRE]: {
      genre: films[0].genre,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
