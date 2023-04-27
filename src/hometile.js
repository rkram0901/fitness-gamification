import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import games from "./images/games.svg";
import arrow_back_ios_new from "./images/arrow_back_ios_new.svg";

class HomeTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} style={{ padding: "10px" }}>
            <Typography style={{ color: "#5a5c69", fontSize: "30px" }}>
              Get Fit to Play Game as you wish
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container style={{ padding: "10px" }}>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card className="card">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className="cardheading"
                  style={{ color: "#4e73df" }}
                >
                  HEXTRIS
                </Typography>
                <img src={games} style={{ width: "40px" }} />
                {this.props.gameTimingDetails && (
                  <div>
                    <Typography component="p">
                      Steps:{" "}
                      {this.props.gameTimingDetails.steps
                        ? this.props.gameTimingDetails.steps
                        : 0}
                    </Typography>
                    <Typography component="p">
                      Timing: {this.props.gameTimingDetails.gameOneTime}
                    </Typography>
                  </div>
                )}
              </CardContent>
              <CardActions>
                {this.props.gameTimingDetails.steps > 0 && (
                  <Button
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "#4e73df",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      this.props.openPlayScreen(
                        this.props.gameTimingDetails.gameOneTime,
                        "https://main.dzr2qnbu9dvmr.amplifyapp.com/"
                      );
                    }}
                  >
                    Play
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card className="card">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className="cardheading"
                  style={{ color: "#1cc88a" }}
                >
                  GOBLIN SLAYER
                </Typography>
                <img src={games} style={{ width: "40px" }} />
                {this.props.gameTimingDetails && (
                  <div>
                    <Typography component="p">
                      Steps:{" "}
                      {this.props.gameTimingDetails.steps
                        ? this.props.gameTimingDetails.steps
                        : 0}
                    </Typography>
                    <Typography component="p">
                      Timing: {this.props.gameTimingDetails.gameTwoTime}
                    </Typography>
                  </div>
                )}
              </CardContent>
              <CardActions>
                {this.props.gameTimingDetails.steps > 0 && (
                  <Button
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "#1cc88a",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      this.props.openPlayScreen(
                        this.props.gameTimingDetails.gameTwoTime,
                        "https://goblinslayer.s3.ap-south-1.amazonaws.com/index.html"
                      );
                    }}
                  >
                    Play
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card className="card">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className="cardheading"
                  style={{ color: "#36b9cc" }}
                >
                  CAR RACER
                </Typography>
                <img src={games} style={{ width: "40px" }} />
                {this.props.gameTimingDetails && (
                  <div>
                    <Typography component="p">
                      Steps:{" "}
                      {this.props.gameTimingDetails.steps
                        ? this.props.gameTimingDetails.steps
                        : 0}
                    </Typography>
                    <Typography component="p">
                      Timing: {this.props.gameTimingDetails.gameThreeTime}
                    </Typography>
                  </div>
                )}
              </CardContent>
              <CardActions>
                {this.props.gameTimingDetails.steps > 0 && (
                  <Button
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "#36b9cc",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      this.props.openPlayScreen(
                        this.props.gameTimingDetails.gameThreeTime,
                        "https://carracer.s3.ap-south-1.amazonaws.com/index.html"
                      );
                    }}
                  >
                    Play
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
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

export default HomeTile;
