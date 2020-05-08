import { createActions, handleActions } from "redux-actions";

export const REQUEST_ACCESS = "REQUEST_ACCESS";
export const REQUEST_ACCESS_SUCCESS = "REQUEST_ACCESS_SUCCESS";
export const REQUEST_ACCESS_ERROR = "REQUEST_ACCESS_ERROR";

export const { requestAccess, requestAccessSuccess, requestAccessError } = createActions({
  [REQUEST_ACCESS]: credentials => ({ credentials }),
  [REQUEST_ACCESS_SUCCESS]: ({ user }) => ({ user }),
  [REQUEST_ACCESS_ERROR]: error => ({ error })
});

export const INITIAL_STATE = {
  value: {
    user: {}
  },
  status: false,
  error: false
};

const reducer = handleActions(
  {
    [REQUEST_ACCESS_SUCCESS]: (state, { payload: { user } }) => {
      return {
        ...state,
        value: user && user._id ? user : state.value
      };
    }
  },
  INITIAL_STATE
);

export default reducer;
