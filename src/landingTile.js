import React from "react";
import _ from "lodash";
import { Fragment } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@material-ui/core";
import Header from "./header.js";
import Landing from "./landing.js";
import Architecture from "./architecture.js";
import "./App.css";
import * as Constants from "./constant.js";
import architecture from "./images/architecture.svg";

class LandingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameLanding: false,
      stepDetails: [],
      gameTimingDetails: {},
      selectedUserName: "",
      isShowArch: false,
    };

    this.handleNameClick = this.handleNameClick.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.postSteps = this.postSteps.bind(this);
    this.handleShowArch = this.handleShowArch.bind(this);
  }

  postSteps() {
    const request = {
      stepsCount: 50,
    };
    axios.post("https://syncwatch.azurewebsites.net/steps", request);
  }

  handleBack() {
    this.setState({ isGameLanding: false, isShowArch: false });
  }

  async navigateToHome(userName) {
    let userId = _.filter(Constants.user, { name: userName })[0].id;
    await axios.post(Constants.router.baseUrl + "/steps/reset/" + userId);
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
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    this.getStepDetails();
    this.timerId = setInterval(() => this.getStepDetails(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  async getStepDetails() {
    const response = await axios.get(Constants.router.baseUrl + "/steps");
    if (response && response.data)
      this.setState({ stepDetails: response.data });
  }

  handleShowArch() {
    this.setState({ isShowArch: true });
  }

  render() {
    return (
      <Fragment>
        <Header isShowArch={true} />
        {this.state.isGameLanding ? (
          <Landing
            gameTimingDetails={this.state.gameTimingDetails}
            selectedUserName={this.state.selectedUserName}
            navigateToHome={this.navigateToHome}
            handleBack={this.handleBack}
          />
        ) : this.state.isShowArch ? (
          <Architecture handleBack={this.handleBack} />
        ) : (
          <Grid container>
            <Grid container style={{paddingTop: '20px'}}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} className="cardstyle border-left-primary-blue">
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[0],
                      "Kiran, Ravi S"
                    );
                  }}
                >
                  <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i className="fa fa-duotone fa-user  fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className="cardnameheading colorblue">
                        Kiran, Ravi S
                      </Typography>
                      <div style={{ paddingTop: "10px" }}>
                        {this.state.stepDetails &&
                        this.state.stepDetails[0] &&
                        this.state.stepDetails[0].stepsCount
                          ? this.state.stepDetails[0].stepsCount
                          : 0}
                      </div>
                      <Typography>Steps</Typography>
                    </Grid>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i class="fa fa-solid fa-flash fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
           {/* <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} className="cardstyle border-left-success-green">
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[1],
                      "Briggs, Leah"
                    );
                  }}
                >
                  <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i className="fa fa-duotone fa-user  fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className="cardnameheading colorsuccess">
                        Briggs, Leah
                      </Typography>
                      <div style={{ paddingTop: "10px" }}>
                        {this.state.stepDetails &&
                        this.state.stepDetails[1] &&
                        this.state.stepDetails[1].stepsCount
                          ? this.state.stepDetails[1].stepsCount
                          : 0}
                      </div>
                      <Typography>Steps</Typography>
                    </Grid>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i class="fa fa-solid fa-flash fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} className="cardstyle border-left-info">
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[2],
                      "Powell, Ed"
                    );
                  }}
                >
                  <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i className="fa fa-duotone fa-user  fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className="cardnameheading colorinfo">
                        Powell, Ed
                      </Typography>
                      <div style={{ paddingTop: "10px" }}>
                        {this.state.stepDetails &&
                        this.state.stepDetails[2] &&
                        this.state.stepDetails[2].stepsCount
                          ? this.state.stepDetails[2].stepsCount
                          : 0}
                      </div>
                      <Typography>Steps</Typography>
                    </Grid>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i class="fa fa-solid fa-flash fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} className="cardstyle border-left-primary-blue">
                <div
                  onClick={() => {
                    this.handleNameClick(
                      this.state.stepDetails[3],
                      "Filkins, Kathleen R"
                    );
                  }}
                >
                  <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i className="fa fa-duotone fa-user  fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className="cardnameheading colorblue">
                        Filkins, Kathleen R
                      </Typography>
                      <div style={{ paddingTop: "10px" }}>
                        {this.state.stepDetails &&
                        this.state.stepDetails[3] &&
                        this.state.stepDetails[3].stepsCount
                          ? this.state.stepDetails[3].stepsCount
                          : 0}
                      </div>
                      <Typography>Steps</Typography>
                    </Grid>
                    <Grid item xs={1} sm={4} md={4}>
                      <div>
                        <i class="fa fa-solid fa-flash fa-4x text-gray-300"></i>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>*/}
            <Grid container style={{paddingTop: '160px'}}>
              <Grid item xs={10} />
              <Grid item xs={1}>
                <Button
                  style={{
                    backgroundColor: "#2F78C4",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    this.handleShowArch();
                  }}
                >
                  <img src={architecture} />
                  Architecture
                </Button>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        )}
      </Fragment>
    );
  }
}

export default LandingTile;
