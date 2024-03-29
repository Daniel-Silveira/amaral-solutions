import { createLogic } from 'redux-logic'
import { REQUEST_ACCESS, requestAccessSuccess, requestAccessError, REQUEST_REGISTER } from '.'
import api from '../api'

export const handleRequstAccessLogic = () => {
  return createLogic({
    type: REQUEST_ACCESS,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      fetch(`${api}/auth/login`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(credentials),
      })
        .then(res => res.json())
        .then(res => {
          dispatch(requestAccessSuccess({ user: res.user }))
          localStorage.setItem('tokenAmaralSolutionsAdmin', JSON.stringify(res.token))
          localStorage.setItem('userAmaralSolutionsAdmin', JSON.stringify(res.user))
        })
        .catch(err => dispatch(requestAccessError({ error: err })))
        .finally(done)
    },
  })
}

export const handleRegisterAccessLogic = () => {
  return createLogic({
    type: REQUEST_REGISTER,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      fetch(`${api}/auth/register`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(credentials),
      })
        .then(res => res.json())
        .then(res => {
          dispatch(requestAccessSuccess({ user: res.user }))
          localStorage.setItem('tokenAmaralSolutionsAdmin', JSON.stringify(res.token))
          localStorage.setItem('userAmaralSolutionsAdmin', JSON.stringify(res.user))
        })
        .catch(err => dispatch(requestAccessError({ error: err })))
        .finally(done)
    },
  })
}

const configureUserLogics = () => {
  return [handleRequstAccessLogic(), handleRegisterAccessLogic()]
}

export default configureUserLogics
