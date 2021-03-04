import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Find Parking Spaces & Garages to Rent Nearby!</h2>
        <p>Whether you’re moving to a new place, staying in a different city for a while or just need some more space to stash your vehicle, Stashbee provides the perfect way to find the right garage or parking space for rent for you</p>
        <ul>
          <li>Search</li>
          <li>Book</li>
          <li>Park</li>
        </ul>
        <a href="https://stashbee.com/parking-spaces" target="_blank" style={{ textDecoration: 'none',color:"#29ab87",backgroundColor:"white" ,padding:5}}>More about Parking space</a><br/><br/>

      </div>
    );
  }
}
 
export default Stuff;