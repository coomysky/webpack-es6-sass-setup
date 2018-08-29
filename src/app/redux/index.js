import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

import socialJobsDuck from './socialJobsDuck';

const socialStore = createStore(
  socialJobsDuck,
  applyMiddleware(logger)
);

export {
  socialStore,
};
