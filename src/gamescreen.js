import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import Iframe from "react-iframe";
import Timer from "./timer.js";
import "./App.css";
import { Grid } from "@material-ui/core";

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Timer navigateToHome={this.props.navigateToHome} timings={this.props.timings} selectedUserName={this.props.selectedUserName} />
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={8}>
          <Iframe
            url="https://main.dzr2qnbu9dvmr.amplifyapp.com/"
            width="800"
            height="450"
            id=""
            className=""
            display="block"
            position="relative"
          />
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Fragment>
    );
  }
}

export default GameScreen;
