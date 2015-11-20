import React from 'react';
import UserStore from '../../stores/UserStore';
import {RouteHandler, Link} from 'react-router';
import {Resolver} from 'react-resolver';

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      user: UserStore.getState().user
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (!this.state.user) {
      this.context.router.transitionTo('customer-login');
    }
    UserStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({user: state.user});
  }

  render(): ?ReactElement {
    return (
      <div>
        <RouteHandler user={this.state.user} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Dashboard.contextTypes = {
  router: React.PropTypes.func
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
