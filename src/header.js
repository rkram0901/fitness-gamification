import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <Grid container className="heading">
        <Grid item xs={12} style={{ padding: "10px" }}>
          {"Gamification of fitness"}{" "}
        </Grid>
      </Grid>
    );
  }
}
export default Header;
