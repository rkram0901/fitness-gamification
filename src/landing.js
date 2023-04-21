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
    };

    this.openPlayScreen = this.openPlayScreen.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this)
  }

  openPlayScreen() {
    this.setState({ playScreenOpen: true });
  }

  navigateToHome(){
      this.setState({playScreenOpen: false})
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.playScreenOpen ? (
          <GameScreen navigateToHome={this.navigateToHome}/>
        ) : (
          <HomeTile openPlayScreen={this.openPlayScreen} />
        )}
      </Fragment>
    );
  }
}

export default Landing;
