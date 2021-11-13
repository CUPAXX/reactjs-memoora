/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




export default () => {
  const store = createStore(
    rootReducer,
    composeEnchancers(
      applyMiddleware(
        thunk,
        logger
      )
    )
  )
  const persistor = persistStore(store)
  return {store, persistor}
}
