import { createLogic } from 'redux-logic'
import {
  REQUEST_PERFIL,
  requestPerfilSuccess,
  requestPerfilError,
  GET_PERFIL,
  LIST_PERFIL,
  listPerfilSuccess,
  listPerfilError,
  EDIT_PERFIL,
} from '.'
import api from '../api'

export const handleRequstPerfilLogic = () => {
  return createLogic({
    type: REQUEST_PERFIL,
    process(
      {
        action: {
          payload: { data },
        },
      },
      dispatch,
      done
    ) {
      const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
      fetch(`${api}/perfil/add`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          dispatch(requestPerfilSuccess({ perfil: res }))
        })
        .catch(err => dispatch(requestPerfilError({ error: err })))
        .finally(done)
    },
  })
}

export const handleEditPerfilLogic = () => {
  return createLogic({
    type: EDIT_PERFIL,
    process(
      {
        action: {
          payload: { data },
        },
      },
      dispatch,
      done
    ) {
      const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
      fetch(`${api}/perfil/update/${data.owner}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
        method: 'PUT',
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          dispatch(requestPerfilSuccess({ perfil: res }))
        })
        .catch(err => dispatch(requestPerfilError({ error: err })))
        .finally(done)
    },
  })
}

export const getPerfilLogic = () => {
  return createLogic({
    type: GET_PERFIL,
    process(
      {
        action: {
          payload: { id },
        },
      },
      dispatch,
      done
    ) {
      const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
      fetch(`${api}/perfil/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
        .then(res => res.json())
        .then(res => {
          dispatch(requestPerfilSuccess({ perfil: res }))
        })
        .catch(err => dispatch(requestPerfilError({ error: err })))
        .finally(done)
    },
  })
}

export const listPerfilLogic = () => {
  return createLogic({
    type: LIST_PERFIL,
    process(
      {
        action: {
          payload: { id },
        },
      },
      dispatch,
      done
    ) {
      fetch(`${api}/perfil/list`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer fsd7fhn4rf832h4f3784fh3n48fc3q4huf3w48fu3w5htw84qth7rw3n4fm783wfh3w48fh34fn7324fh327498fh32f83f587fgh745g45uh',
        },
      })
        .then(res => res.json())
        .then(res => {
          dispatch(listPerfilSuccess({ list: res }))
        })
        .catch(err => dispatch(listPerfilError({ error: err })))
        .finally(done)
    },
  })
}

const configurePerfilLogics = () => {
  return [handleRequstPerfilLogic(), getPerfilLogic(), listPerfilLogic(), handleEditPerfilLogic()]
}

export default configurePerfilLogics
