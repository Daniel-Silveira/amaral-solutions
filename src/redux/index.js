import { createStore, applyMiddleware } from 'redux'
import logics from './logics'
import { createLogicMiddleware } from 'redux-logic'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(createLogicMiddleware(logics)))

export default store