import { createActions, handleActions } from 'redux-actions'

export const REQUEST_ACCESS = 'REQUEST_ACCESS'
export const REQUEST_ACCESS_SUCCESS = 'REQUEST_ACCESS_SUCCESS'
export const REQUEST_ACCESS_ERROR = 'REQUEST_ACCESS_ERROR'
export const REQUEST_REGISTER = 'REQUEST_REGISTER'

export const { requestAccess, requestAccessSuccess, requestAccessError } = createActions({
  [REQUEST_ACCESS]: credentials => ({ credentials }),
  [REQUEST_ACCESS_SUCCESS]: ({ user }) => ({ user }),
  [REQUEST_ACCESS_ERROR]: error => ({ error }),
})

export const { requestRegister } = createActions({
  [REQUEST_REGISTER]: credentials => ({ credentials }),
})

export const INITIAL_STATE = {
  user: {},
  status: false,
  error: false,
}

const reducer = handleActions(
  {
    [REQUEST_ACCESS_SUCCESS]: (state, { payload: { user } }) => {
      return {
        ...state,
        user,
      }
    },
  },
  INITIAL_STATE
)

export default reducer
