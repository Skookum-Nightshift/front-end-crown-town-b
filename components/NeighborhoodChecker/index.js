import React from 'react';
import {apiGet} from 'requestLib';

class NeighborhoodChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geometries: [],
      validAddress: false,
      addressChecked: false,
    };

    this.checkNeighborhood = this.checkNeighborhood.bind(this);
  }

  componentDidMount() {
    apiGet('v1/neighborhoods/geometries', null, 
    (response) => this.setState({geometries: response.neighborhoods}));
  }

  checkNeighborhood(e) {
    e.preventDefault();

    var GoogleMapsLoader = require('google-maps');
    GoogleMapsLoader.KEY = 'AIzaSyDctlnXMDCnbkM9KWbR_AKHxF2ictV0RuU';
    GoogleMapsLoader.LIBRARIES = ['geometry'];
    GoogleMapsLoader.load(google => {
      var geocoder = new google.maps.Geocoder();
      var address = this.refs.address.getDOMNode().value;

      geocoder.geocode({address}, (results, status) => {
        var userLocation = results[0].geometry.location;
        var results = this.state.geometries.map(g => this.compareLocation(google, userLocation, g));
        console.log(results);
        this.setState({validAddress: results.indexOf(true) > -1, addressChecked: true});
      });
    });
  }

  compareLocation(google, u, npa) {
    let coords = [];
    for (let index = 0; index < npa.length; index++){
      let lat = npa[index][0];
      let lng = npa[index][1];
      let new_coords = new google.maps.LatLng(lng, lat);
      coords.push(new_coords);
    }

    let poly = new google.maps.Polygon({ paths: coords });
    return google.maps.geometry.poly.containsLocation(u, poly);
  }

  render() {

    var extraProps = {};
    if (this.state.geometries.length === 0) {
      extraProps.disabled = true;
    }
    return (
      <form onSubmit={this.checkNeighborhood}>
        <p>
          <label for="address">Enter your street address:</label>
          <input type="text" name="address" id="address" ref="address" />
        </p>
        <input type="submit" value="Check Your Address" className="button red-button" {...extraProps} />
        {this.state.addressChecked ? ( this.state.validAddress ? 'Valid' : 'Not Valid' ) : '' }
      </form>
    );
  }
}

export default NeighborhoodChecker;