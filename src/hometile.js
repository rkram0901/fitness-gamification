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
import directions_walk from "./images/directions_walk.svg";
import hotel from "./images/hotel.svg";
import fitness_center from "./images/fitness_center.svg";

class HomeTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card className="card">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className="cardheading"
                >
                  Game1
                </Typography>
                <img src={directions_walk} style={{ width: "40px" }} />
                <Typography component="p">
                  Based on your fitness tracking measures you will get some time to play!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#027E69",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    this.props.openPlayScreen();
                  }}
                >
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card className="card">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className="cardheading"
                >
                  Game2
                </Typography>
                <img src={fitness_center} style={{ width: "40px" }} />
                <Typography component="p">
                Based on your fitness tracking measures you will get some time to play!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#027E69",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    this.props.openPlayScreen();
                  }}
                >
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <Card className="card">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  className="cardheading"
                >
                  Game3
                </Typography>
                <img src={hotel} style={{ width: "40px" }} />
                <Typography component="p">
                Based on your fitness tracking measures you will get some time to play!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#027E69",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    this.props.openPlayScreen();
                  }}
                >
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default HomeTile;
