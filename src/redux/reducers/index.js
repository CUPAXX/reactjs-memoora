import { combineReducers } from 'redux';
import auth from './auth'
import country from './country';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistAuth = {
  key: 'auth',
  storage: storage,
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  country
})

export default reducer
