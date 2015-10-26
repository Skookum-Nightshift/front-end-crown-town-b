var alt = require('../alt');
var UserActions = require('../actions/UserActions');

import cookie from 'react-cookie';

class UserStore {
  constructor() {
    this.user = cookie.load('user');

    this.bindListeners({
      handleUpdateBucketLocation: UserActions.UPDATE_BUCKET_LOCATION,
      handleUpdateCanPickup: UserActions.UPDATE_CAN_PICKUP,
      handleUpdateUser: UserActions.UPDATE_USER,
      handleDeleteUser: UserActions.DELETE_USER,
    });
  }

  handleUpdateBucketLocation(location) {
    console.log(location);
    this.user.bucket_location = location;
  }

  handleUpdateCanPickup(can_pickup) {
    console.log(can_pickup);
    this.user.can_pickup = can_pickup;
  }
  
  handleUpdateUser(user) {
    console.log(user);
    this.user = user;
    cookie.save('user', user, {
      expires: new Date(user.auth_token_expiration)
    });
  }

  handleDeleteUser() {
    this.user = null;
    cookie.remove('user');
  }
}

module.exports = alt.createStore(UserStore, 'UserStore');
