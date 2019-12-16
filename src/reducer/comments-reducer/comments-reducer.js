import commentAdapter from "../../adapter/comment-adapter";

const initialState = {
  comments: [],
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};

const Operation = {
  loadComments: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload.map(commentAdapter),
      });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
