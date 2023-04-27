import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import "./App.css";
import architectImage from "./images/architect-image.png";
import arrow_back_ios_new from "./images/arrow_back_ios_new.svg"

class Architecture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Grid container style={{ display: "block" }}>
          <img src={architectImage} style={{width: '57%'}}/>
        </Grid>
        <Grid container>
          <Grid item xs={1} style={{ paddingTop: "80px", paddingLeft: "15px" }}>
            <Button
              style={{
                backgroundColor: "#2F78C4",
                textTransform: "none",
              }}
              onClick={() => {
                this.props.handleBack();
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

export default Architecture;
