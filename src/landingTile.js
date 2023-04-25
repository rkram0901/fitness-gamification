import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core";
import Header from "./header.js";
import Landing from "./landing.js";
import "./App.css";
import * as Constants from "./constant.js";

class LandingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameLanding: false,
      stepDetails: [],
      gameTimingDetails: {},
      selectedUserName: "",
    };

    this.handleNameClick = this.handleNameClick.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  async navigateToHome(userName) {
    let userId = _.filter(Constants.user, {name: userName})[0].id
    await axios.post(Constants.router.baseUrl + "/steps/reset/"+userId)
    this.setState({ isGameLanding: false });
  }

  handleNameClick(stepDetails, selectedUserName) {
    let gameTimingDetails = this.getGameTimingDetails(stepDetails);
    this.setState({ isGameLanding: true, gameTimingDetails, selectedUserName });
  }

  getGameTimingDetails(stepDetails) {
    let gameTimingDetails = {
      userId: stepDetails.id,
      steps: stepDetails.stepsCount,
    };
    gameTimingDetails.gameOneTime = this.secondsToTime(
      stepDetails.stepsCount * 2
    );
    gameTimingDetails.gameTwoTime = this.secondsToTime(stepDetails.stepsCount);
    gameTimingDetails.gameThreeTime = this.secondsToTime(
      stepDetails.stepsCount * 1.5
    );
    return gameTimingDetails;
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    return (
      (hours > 9 ? hours : "0" + hours) +
      ":" +
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds)
    );
  }

  componentDidMount() {
    this.getStepDetails();
    this.timerId = setInterval(() =>
      this.getStepDetails(), 10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  async getStepDetails() {
    const response = await axios.get(Constants.router.baseUrl + "/steps");
    if (response && response.data)
      this.setState({ stepDetails: response.data });
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.isGameLanding ? (
          <Landing
            gameTimingDetails={this.state.gameTimingDetails}
            selectedUserName={this.state.selectedUserName}
            navigateToHome={this.navigateToHome}
          />
        ) : (
          <Grid container>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} style={{ padding: "10px" }}>
                <Typography style={{ color: "#5a5c69", fontSize: "30px" }}>
                  Gamification of fitness
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} style={{ padding: "10px" }}>
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[0],
                      "Filkins, Kathleen R"
                    );
                  }}
                  style={{
                    width: "100%",
                    height: "150px",
                    borderLeft: "4px solid rgb(78, 115, 223)",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                >
                  <Typography
                    style={{ color: "rgb(78, 115, 223)", fontSize: "30px" }}
                  >
                    Filkins, Kathleen R
                  </Typography>
                  <div>
                    {this.state.stepDetails &&
                    this.state.stepDetails[0] &&
                    this.state.stepDetails[0].stepsCount
                      ? this.state.stepDetails[0].stepsCount
                      : 0}
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} style={{ padding: "10px" }}>
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[1],
                      "Briggs, Leah"
                    );
                  }}
                  style={{
                    width: "100%",
                    height: "150px",
                    borderLeft: "4px solid #1cc88a",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                >
                  <Typography style={{ color: "#1cc88a", fontSize: "30px" }}>
                    Briggs, Leah
                  </Typography>
                  <div>
                    {this.state.stepDetails &&
                    this.state.stepDetails[1] &&
                    this.state.stepDetails[1].stepsCount
                      ? this.state.stepDetails[1].stepsCount
                      : 0}
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} style={{ padding: "10px" }}>
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[2],
                      "Powell, Ed"
                    );
                  }}
                  style={{
                    width: "100%",
                    height: "150px",
                    borderLeft: "4px solid #36b9cc",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                >
                  <Typography style={{ color: "#36b9cc", fontSize: "30px" }}>
                    Powell, Ed
                  </Typography>
                  <div>
                    {this.state.stepDetails &&
                    this.state.stepDetails[2] &&
                    this.state.stepDetails[2].stepsCount
                      ? this.state.stepDetails[2].stepsCount
                      : 0}
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        )}
      </Fragment>
    );
  }
}

export default LandingTile;
