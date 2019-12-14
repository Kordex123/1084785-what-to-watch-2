import MockAdapter from "axios-mock-adapter";
import {configureAPI} from "../../api";
import {
  ActionType,
  Operation,
} from "./movies-reducer";


describe(`Movie reducer works correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = configureAPI();
    const apiMock = new MockAdapter(api);
    const movieLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return movieLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
      });
  });
});
