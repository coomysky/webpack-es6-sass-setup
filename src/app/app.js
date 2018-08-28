'use strict';


import 'lodash';
import './styles';
import { SocialService } from './services';

function init() {
  const socialService = new SocialService();
  socialService.getSocial();
}

init();



