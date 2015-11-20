var alt = require('../alt');

import { apiPost } from '../lib/requestLib';

class UserActions {
  updateUser(user) {
    this.dispatch(user);
  }
  deleteUser() {
    this.dispatch();
  }
}

module.exports = alt.createActions(UserActions);
