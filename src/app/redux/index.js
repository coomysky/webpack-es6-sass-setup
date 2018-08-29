import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

import scanJobsDuck from './scanJobsDuck';

const scanStore = createStore(
  scanJobsDuck,
  applyMiddleware(logger)
);

export {
  scanStore,
};
