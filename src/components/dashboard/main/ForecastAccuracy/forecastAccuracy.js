import React, { Component } from "react";
import {Grid, Typography} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import styles from "./forecastAccuracyStyle";
import ForecastAccuracyCard from "./forecastAccuracyCard";


class ForecastAccuracy extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>  
        <Grid container >    
          <Grid className={classes.section1} xs={12} item>
            <h3>Forecast Accuracy</h3>
          </Grid>
          <Grid xs={12} item>  
            <ForecastAccuracyCard />
          </Grid>      
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ForecastAccuracy);
