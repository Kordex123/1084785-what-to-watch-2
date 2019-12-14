const initialState = {
  genre: `All genres`,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
};

const ActionCreator = {
  setGenre: (selectedGenre) => ({
    type: ActionType.SET_GENRE,
    payload: selectedGenre,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  reducer,
};
