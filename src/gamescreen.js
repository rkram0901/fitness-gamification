import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import Iframe from "react-iframe";
import Timer from "./timer.js";
import "./App.css";
import { Grid, Button } from "@material-ui/core";
import arrow_back_ios_new from "./images/arrow_back_ios_new.svg";

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
            url={this.props.gameUrl}
            width="800"
            height="450"
            id=""
            className=""
            display="block"
            position="relative"
          />
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={1} style={{paddingLeft: "15px" }}>
            <Button
              style={{
                backgroundColor: "#2F78C4",
                textTransform: "none",
              }}
              onClick={() => {
                this.props.navigateToGameHome(this.props.selectedUserName);
              }}
            >
              <img src={arrow_back_ios_new} />
              Back
            </Button>
          </Grid>
          <Grid item xs={11} />
        </Grid>
      </Fragment>
    );
  }
}

export default GameScreen;
