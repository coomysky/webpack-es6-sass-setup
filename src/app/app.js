'use strict';


import 'lodash';
import './styles';

import { TrackOffController } from './controllers';

const trackeOffController = new TrackOffController();

window.addEventListener("load", function(event) {
  trackeOffController.registEvents();
});



trackeOffController.init();




