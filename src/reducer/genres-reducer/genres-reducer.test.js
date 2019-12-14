import {ActionCreator, reducer} from "./genres-reducer";


describe(`Genres reducer works correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const state = {
      genre: null
    };
    const testGenre = `test genre`;

    expect(reducer(state, ActionCreator.setGenre(testGenre))).toEqual({genre: testGenre});
  });
});
