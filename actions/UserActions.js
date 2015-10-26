var alt = require('../alt');

import { apiPost } from '../lib/requestLib';

class UserActions {
  updateUser(user) {
    this.dispatch(user);
  }
  updateBucketLocation(location) {
    this.dispatch(location);
  }
  updateCanPickup(can_pickup) {
    this.dispatch(can_pickup);
  }
  deleteUser() {
    this.dispatch();
  }
}

module.exports = alt.createActions(UserActions);
