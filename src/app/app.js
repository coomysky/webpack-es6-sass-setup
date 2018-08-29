'use strict';


import 'lodash';
import './styles';
import { createStore } from 'redux';
import { TrackOffController } from './controllers';


function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

const store = createStore(counter);

const trackeOffController = new TrackOffController(store);
trackeOffController.init();





