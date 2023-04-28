import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import HomeTile from "./hometile.js";
import GameScreen from "./gamescreen.js";
import "./App.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playScreenOpen: false,
      timings: "",
      gameUrl: "",
    };

    this.openPlayScreen = this.openPlayScreen.bind(this);
  }

  openPlayScreen(timings, gameUrl) {
    this.setState({ playScreenOpen: true, timings: timings, gameUrl: gameUrl });
  }

  

  render() {
    return (
      <Fragment>
        {this.state.playScreenOpen ? (
          <GameScreen
            navigateToHome={this.props.navigateToHome}
            timings={this.state.timings}
            selectedUserName={this.props.selectedUserName}
            navigateToGameHome={this.props.navigateToHome}
            gameUrl={this.state.gameUrl}
          />
        ) : (
          <HomeTile
            openPlayScreen={this.openPlayScreen}
            gameTimingDetails={this.props.gameTimingDetails}
            handleBack={this.props.handleBack}
          />
        )}
      </Fragment>
    );
  }
}

export default Landing;
