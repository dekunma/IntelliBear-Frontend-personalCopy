import React, { Component } from "react";
import "./overview.css";
import CardReviews from "./card-reviews";
import CardTotalSales from "./card-totalsales";
import CardTop5Food from "./card-top5food";
import CardSalesBudget from "./card-salesbudget";
import Grid from '@material-ui/core/Grid';

class OverviewCards extends Component {
  state = {
    cards: {
      0: <CardSalesBudget />,
      1: <CardTop5Food />,
      2: <CardTotalSales />,
      3: <CardReviews />,
    },
  };

  generateLayout() {
    let newLayout = [];
    this.props.cardsOrder.forEach((ID, idx) => {
      newLayout.push({
        i: "card-container-" + ID,
        x: Math.floor(idx / 2),
        y: idx % 2,
        w: 1,
        h: 1,
        static: true,
      });
    });
    return newLayout;
  }

  render() {
    const { cards } = this.state;
    const { cardsOrder } = this.props;
    let layout = this.generateLayout();

    return (
      // <GridLayout
      //   className="overview-layout"
      //   layout={layout}
      //   cols={2}
      //   width={400}
      //   rowHeight={320}
      // >
      //   <div key="card-container-0">{cards[cardsOrder[0]]}</div>
      //   <div key="card-container-1">{cards[cardsOrder[1]]}</div>
      //   <div key="card-container-2">{cards[cardsOrder[2]]}</div>
      //   <div key="card-container-3">{cards[cardsOrder[3]]}</div>
      // </GridLayout>
      <div style={{width:'100%'}}>
        <Grid container spacing={3}>

          <Grid item md={6} style={{width:'100%'}}>
            <CardSalesBudget/>
          </Grid>

          <Grid item md={6} style={{width:'100%'}}>
            <CardTotalSales/>
          </Grid>

          <Grid item md={6} style={{width:'100%'}}>
            <CardReviews/>
          </Grid>

          <Grid item md={6} style={{width:'100%'}}>
            <CardTop5Food/>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default OverviewCards;
