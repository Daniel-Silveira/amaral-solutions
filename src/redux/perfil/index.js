import { createActions, handleActions } from 'redux-actions'

export const REQUEST_PERFIL = 'REQUEST_PERFIL'
export const REQUEST_PERFIL_SUCCESS = 'REQUEST_PERFIL_SUCCESS'
export const REQUEST_PERFIL_ERROR = 'REQUEST_PERFIL_ERROR'
export const GET_PERFIL = 'GET_PERFIL'
export const GET_PERFIL_SUCCESS = 'GET_PERFIL_SUCCESS'
export const GET_PERFIL_ERROR = 'GET_PERFIL_ERROR'
export const LIST_PERFIL = 'LIST_PERFIL'
export const LIST_PERFIL_SUCCESS = 'LIST_PERFIL_SUCCESS'
export const LIST_PERFIL_ERROR = 'LIST_PERFIL_ERROR'
export const EDIT_PERFIL = 'EDIT_PERFIL'

export const { requestPerfil, requestPerfilSuccess, requestPerfilError } = createActions({
  [REQUEST_PERFIL]: data => ({ data }),
  [REQUEST_PERFIL_SUCCESS]: ({ perfil }) => ({ perfil }),
  [REQUEST_PERFIL_ERROR]: error => ({ error }),
})

export const { editPerfil } = createActions({
  [EDIT_PERFIL]: data => ({ data }),
})

export const { getPerfil, getPerfilSuccess, getPerfilError } = createActions({
  [GET_PERFIL]: id => ({ id }),
  [GET_PERFIL_SUCCESS]: ({ perfil }) => ({ perfil }),
  [GET_PERFIL_ERROR]: error => ({ error }),
})

export const { listPerfil, listPerfilSuccess, listPerfilError } = createActions({
  [LIST_PERFIL]: id => ({id}),
  [LIST_PERFIL_SUCCESS]: ({ list }) => ({ list }),
  [LIST_PERFIL_ERROR]: error => ({ error }),
})


export const INITIAL_STATE = {
  perfil: {},
  list: []
}

const reducer = handleActions(
  {
    [REQUEST_PERFIL_SUCCESS]: (state, { payload: { perfil } }) => {
      return {
        ...state,
        perfil: perfil && perfil._id ? perfil : state.value,
      }
    },
    [LIST_PERFIL_SUCCESS]: (state, { payload: { list } }) => {
      return {
        ...state,
        list: list.length > 0 ? list : state.value,
      }
    },
  },
  INITIAL_STATE
)

export default reducer
