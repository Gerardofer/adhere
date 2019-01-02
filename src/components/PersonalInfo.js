import React, { Component } from 'react';
import Name from "./Name";
import Address from "./Address";
import Contact from "./Contact";
import Location from "./Location";

class PersonalInfo extends Component {
  render() {
    return (
      <div>   
          <Name 
            fistName={this.props.firstName}
            lastName={this.props.lastName}
          />
          <Address 
            address={this.props.address}
          />
          <Location 
            zip={this.props.zip}
            city={this.props.city}
            state={this.props.state}
          />
          <Contact 
            email={this.props.email}
            phone={this.props.phone}
          />
      </div>
    );
  }
}

export default PersonalInfo;
