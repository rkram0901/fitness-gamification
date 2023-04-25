import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import Header from "./header.js";
import HomeTile from "./hometile.js";
import GameScreen from "./gamescreen.js"
import "./App.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playScreenOpen: false,
      timings: ''
    };

    this.openPlayScreen = this.openPlayScreen.bind(this);
  }

  openPlayScreen(timings) {
    this.setState({ playScreenOpen: true , timings: timings});
  }

  render() {
    return (
      <Fragment>
        {this.state.playScreenOpen ? (
          <GameScreen navigateToHome={this.props.navigateToHome} timings={this.state.timings} selectedUserName={this.props.selectedUserName}/>
        ) : (
          <HomeTile openPlayScreen={this.openPlayScreen} gameTimingDetails={this.props.gameTimingDetails}/>
        )}
      </Fragment>
    );
  }
}

export default Landing;
