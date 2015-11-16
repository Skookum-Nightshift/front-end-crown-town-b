// require('../css/styles.css');

import React from 'react';
import {Link} from 'react-router';

class Landing extends React.Component {

  render(): ?ReactElement {
    return (
    <main>
      <section className="blue">
        <h1>Your food waste could feed Charlotte</h1>
        <p>Together with your food waste and our specially-designed bike trailers, we can divert large amounts of food waste from landfills.</p>
      </section>
      <section className="grey neighborhood-check">
        <h2>Are we in your neighborhood?</h2>
        <form className="" action="#" method="post">
          <p>
            <label for="address">Enter your street address:</label>
            <input type="text" name="address" id="address" value=""/>
          </p>
          {/* <a href="in-area.html">Check address [Y]</a>
          <a href="out-of-area.html">Check address [N]</a> */}
          <input type="submit" value="Check Your Address" className="button red-button"/>
        </form>
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
        <Link to="/home/faq" className="button white-button">Get answers fast</Link>
      </section>
    </main>
    )
  }
}

export default Landing;



