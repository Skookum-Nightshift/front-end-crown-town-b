require('./css/styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';
import {Link, RouteHandler} from 'react-router';
import NeighborhoodChecker from '../../components/NeighborhoodChecker';

class Home extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      user: UserStore.getState().user
    };
  }

  render(): ?ReactElement {
    return (
      <div className="Home">
        <main>
          <section className="blue">
            <h1>Your food waste could feed Charlotte</h1>
            <p>Together with your food waste and our specially-designed bike trailers, we can divert large amounts of food waste from landfills.</p>
          </section>
          <section className="grey neighborhood-check">
            <h2>Are we in your neighborhood?</h2>
            <NeighborhoodChecker />
          </section>
          <section className="white">
            <h2>How we operate</h2>
            <p>You may store your compostable items in our complimentary odor-sealed four gallon bucket.</p>
            <p>On your scheduled trash collection day leave your bucket outside to be emptied, cleaned and left near your front door.</p> 
            <p>Meanwhile, professional composters turn your food waste into nutrient-rich soils that you can use to grow food in your personal or community garden.</p>
            <a href="#" className="button white-button">What can I compost?</a>
          </section>
          <section className="grey">
            <h2>Composting is great for business</h2>
            <p>
              Do you work for or own a local business that is interested in learning more about the benefits of composting?
            </p>
            <p>
              <a href="#" className="button red-button">Let us help your business start composting</a>
            </p>
          </section>
          <section className="white">
            <h2>Currently serving Wilmore residents and Atherton Market guests</h2>
            <p>We currently operate in Charlotte’s Wilmore neighborhood.</p>
            <p>On Saturday mornings from 9 &ndash; 11 we host Community Compost Days at the Atherton Farmer&#39;s Market where we collect household food waste from community members whose neighborhoods we do not yet service.</p>
            <a href="#" className="button white-button">Get more info</a>
          </section>
          <section className="grey">
            <h2>We&#39;re glad you asked!</h2>
            <p>There are several questions we get asked a lot. If you don&#39;t see an answer to your question, please contact us.</p>
            <a href="faq" className="button white-button">Get answers fast</a>
          </section>
        </main>
        <footer>
          <div className="left">
            <h2>In case of emergency</h2>
            <ul>
              <li className="call">
                <a href="tel:9802537670">
                  <i className="material-icons">phone</i>
                </a>
                <h4>CALL</h4>
              </li>
              <li className="email">
                <a href="mailto:crowntowncompost@gmail.com">
                  <i className="material-icons">email</i>
                </a>
                <h4>EMAIL</h4>
              </li>
            </ul>
          </div>
          <div className="right">
            <h2>Track our Adventure</h2>
            <ul>
              <li>
                <a href="https://instagram.com/crowntowncompost/">
                  <div className="border">
                    <img src={require('url-loader?mimetype=image/png!./img/instagram.png')} alt="Instagram logo" />
                  </div>
                </a>
                <h4>INSTAGRAM</h4>
              </li>
              <li>
                <a href="https://twitter.com/ctcompost">
                  <div className="border">
                    <img src={require('url-loader?mimetype=image/png!./img/twitter.png')} alt="Twitter logo" />
                  </div>
                </a>
                <h4>TWITTER</h4>
              </li>
              <li>
                <a href="https://www.facebook.com/crowntowncompost">
                  <div className="border">
                    <img src={require('url-loader?mimetype=image/png!./img/facebook.png')} alt="Facebook logo" />
                  </div>
                </a>
                <h4>FACEBOOK</h4>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}


Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
