import React from 'react';
import {Resolver} from 'react-resolver';
import UserStore from '../../stores/UserStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getState().user
    };
  }
  render(): ?ReactElement {
    return (
      <div className="Home">
        <nav>
          <ul>
            <li><a href="weekly.html">My account</a></li>
            <li><a href="#">What's new?</a></li>
          </ul>
        </nav>

        <main>
          <section>
            <h1>Your food waste could feed Charlotte</h1>
            <p>Together with your food waste and our specially-designed bike trailers, we can divert large amounts of food waste from landfills.</p>
          </section>
          <section>
            <h2>Are we in your neighborhood?</h2>
            <form class="" action="#" method="post">
              <p>
                <label for="address">Enter your street address</label>
                <input type="text" name="address" id="address" value=""/>
              </p>
              <a href="in-area.html">Check address [Y]</a>
              <a href="out-of-area.html">Check address [N]</a>
              <input type="submit" value="Check address"/>
            </form>
          </section>
          <section>
            <h2>How we operate</h2>
            <p>You may store your compostable items in our complimentary odor-sealed four gallon bucket. On your scheduled trash collection day leave your bucket outside to be emptied, cleaned and left near your front door. Meanwhile, professional composters turn your food waste into nutrient-rich soils that you can use to grow food in your personal or community garden.</p>
            <p>
              <a href="#">See what items are compostable, recyclable and trash</a>
            </p>
          </section>
          <section>
            <h2>Composting is great for business</h2>
            <p>
              Do you work for or own a local business that is interested in learning more about the benefits of composting?
            </p>
            <p>
              <a href="#">Let us help your business start composting</a>
            </p>
          </section>
          <section>
            <h2>Currently serving Wilmore residents and Atherton Market guests</h2>
            <p>
              We currently operate in Charlotte’s Wilmore neighborhood.

              On Saturday mornings from 9 &ndash; 11 we host Community Compost Days at the Atherton Farmer's Market where we collect household food waste from community members whose neighborhoods we do not yet service.
            </p>
          </section>
          <section>
            <h2>We're glad you asked</h2>
            <p>
              <a href="questions.html">Find answers to popular questions</a>
            </p>
          </section>
          <section>
            <h2>Are we in your neighborhood?</h2>
            <form class="" action="#" method="post">
              <p>
                <label for="address">Enter your street address</label>
                <input type="text" name="address" id="address" value=""/>
              </p>
              <input type="submit" value="Check address"/>
            </form>
          </section>
        </main>
        <footer>
          <h2>In case of emergency</h2>
          <ul>
            <li>Call us: <a href="tel:+19802537670">980-253-7670</a></li>
            <li>Email us: <a href="mailto:crowntowncompost@gmail.com">crowntowncompost@gmail.com</a></li>
          </ul>
          <h2>Be part of our community</h2>
          <ul>
            <li><a href="https://instagram.com/crowntowncompost/">Follow us on instagram</a></li>
          </ul>
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
