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
        <Timer navigateToHome={this.props.navigateToHome} />
        <Grid>
          <Iframe
            url="http://cvs-hackathon-hex-tetris.s3-website-us-east-1.amazonaws.com/"
            width="800"
            height="450"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </Grid>
      </Fragment>
    );
  }
}

export default GameScreen;
