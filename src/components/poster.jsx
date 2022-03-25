import React, { Component } from "react";
import forSale from "../../public/forSale.png";
import offerprice from "../../public/offerprice.png";

class Poster extends Component {
  render() {
    return (
      <div style={{ background: "#ffd33b" }}>
        <img src={forSale} alt="for sale" />
        <img src={offerprice} alt="for sale" class="img-fluid" />
      </div>
    );
  }
}

export default Poster;
//<img style={{width:"80%"}} src={forSale} alt="for sale" />
