import { combineReducers } from 'redux';
import auth from './auth'
import country from './country';
import user from './user'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistAuth = {
  key: 'auth',
  storage: storage,
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  country,
  user
})

export default reducer
