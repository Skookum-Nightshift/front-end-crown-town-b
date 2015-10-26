import React from 'react';
import UserStore from '../../stores/UserStore';

class AuthenticatedRoute extends React.Component {
  static willTransitionTo(transition) {
      var user = UserStore.getState().user;
      if (!user) {
          transition.redirect('customer-login', {}, { 'nextPath': transition.path });
      }
  }
  
  constructor(props) {
    super(props);
  }
}

export default AuthenticatedRoute;