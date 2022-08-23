import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import onboarding from './onboarding';
import character from './character';
import location from './location';

const rootReducer = combineReducers({
  onboarding,
  character,
  location,
});

const persistConfig = {
  key: 'root',
  whiteList: ['onboarding', 'location'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
