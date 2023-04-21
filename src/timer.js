import { Button, DialogActions, DialogTitle, Dialog } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: "00:1:05", endGame: false };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  navigateToHome() {
    this.setState({ endGame: false }, () => {
      this.props.navigateToHome();
    });
  }

  convertToSeconds(time) {
    let a = time.split(":"); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
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
    let seconds = this.convertToSeconds(this.state.time);
    let timeLeftVar = this.secondsToTime(seconds);
    this.setState({ time: timeLeftVar }, () => {
      this.startTimer();
    });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.convertToSeconds(this.state.time);
    seconds = seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      this.setState({ endGame: true });
    }
  }

  render() {
    return (
      <Fragment>
        <h2>{this.state.time}</h2>
        {
          <Dialog open={this.state.endGame}>
            <DialogTitle>Time's Up!</DialogTitle>
            <DialogActions>
              <Button
                onClick={() => {
                  this.navigateToHome();
                }}
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        }
      </Fragment>
    );
  }
}

export default Timer;
