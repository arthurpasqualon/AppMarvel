import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from 'redux';
import onboarding from './onboarding';
import character from './character';
import defaultSearch from './defaultSearch';
import location from './location';

const rootReducer = combineReducers({
  onboarding,
  character,
  defaultSearch,
  location,
});
/** Root End */

const persistConfig = {
  key: 'root',
  whiteList: ['onboarding', 'location'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
