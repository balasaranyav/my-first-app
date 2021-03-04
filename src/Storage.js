import React, { Component } from "react";

class Home extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <h2>Finding Storage just got easier!</h2>
        <p>We get it - stuff is necessary. The solution to your storage woes is not always to rehome or recycle everything you own. Sometimes you wish you could magic up a few more square feet of space, just for a while. Well, with Stashbee you can.
Simply enter your postcode below and browse a range of storage space to rent near you, from storage units and unused garages to empty lofts and warehouse space. Looking for something within walking distance of your home, or just around the corner from your office? No problemo! You can use the filters to choose the space type, size and price of a storage solution to suit you.
All of our hosts are verified and vetted and we will insure your stuff against damage, so you can rest assured that your belongings are safe as houses after they leave your home.
</p>
        <p> We’re on hand to help you achieve the no-clutter, no-stress home space that you deserve (take that, Marie Kondo!)</p>
        <a href="https://stashbee.com/storage" target="_blank" style={{ textDecoration: 'none',color:"#29ab87",backgroundColor:"white" ,padding:5}}>More about Storage space</a><br/><br/>
      </div>
    );
  }
}
 
export default Home;