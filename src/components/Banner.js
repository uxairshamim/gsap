import "../styles/Banner.css";
import Colorsbox from "./Colorsbox";

import React from 'react';

  class Banner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstBoxColor: "0C0F0A",
        secondBoxColor: "FF206E",
        thirdBoxColor: "FBFF12",
        fourthBoxColor: "41EAD4",
        fifthBoxColor: "FFFFFF"
      };
    }
  
    render() {
      return (
        <div className="banner-main-sec">
            <img src={process.env.PUBLIC_URL + "images/monkey-back.png"} className="img-fluid" alt="monkey-back" />
            <div className="banner-color-boxes">
                <Colorsbox box={this.state.firstBoxColor}  />
                <Colorsbox box={this.state.secondBoxColor}  />
                <Colorsbox box={this.state.thirdBoxColor}  />
                <Colorsbox box={this.state.fourthBoxColor}  />
                <Colorsbox box={this.state.fifthBoxColor}  />
            </div>
        </div>
      );
    }
  }


  export default Banner;
  