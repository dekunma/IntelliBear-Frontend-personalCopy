import React, { Component } from "react";
import {Grid, Typography} from '@material-ui/core';
import { grayColor } from '../../../assets/globalStyleProperties';
import { withStyles} from '@material-ui/core/styles';
import styles from "./posForecastStyle";
import POSForecastCard from "./posForecastCard";


class POSForecast extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>  
        <Grid container>    
          <Grid className={classes.section1} xs={12} item>
            <h3>POSForecast</h3>
          </Grid>
          <Grid xs={12} item>  
            <POSForecastCard />
          </Grid>      
        </Grid>
      </div>
    
      // <section className={classes.main}>
      //   <Grid container className={classes.root}>
      //     <Grid item xs={12}>
      //       <h3>POSForecast</h3>
      //     </Grid>
      //     <Grid item xs={12}>
      //       <Card className={classes.card}>

      //       </Card>
      //     </Grid>
      //   </Grid>
      // </section>
    );
  }
}

export default withStyles(styles, { withTheme: true })(POSForecast);
