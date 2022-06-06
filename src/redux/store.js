import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import promisMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleware = applyMiddleware(logger, promisMiddleware);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
