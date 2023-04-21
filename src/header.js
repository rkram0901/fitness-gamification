import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <Grid container className="heading">
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{ padding: "10px" }}>
          {"Convert Your Fitness to Play time"}{" "}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    );
  }
}
export default Header;
