import {ActionCreator, reducer} from './reducer';

it(`Reducer correctly renders after relaunch`, () => {
  const state = {
    genre: null,
    movieCards: [],
  };
  const testGenre = `test genre`;
  expect(reducer(state, ActionCreator.setGenre(testGenre))).toEqual({genre: testGenre, movieCards: []});

  const testMovieCards = [{genre: testGenre}, {genre: `Rikitiki`}];
  expect(reducer(state, ActionCreator.loadMovies(testMovieCards))).toEqual({genre: null, movieCards: testMovieCards});
});
