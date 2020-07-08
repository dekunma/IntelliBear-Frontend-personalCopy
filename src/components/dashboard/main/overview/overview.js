import React, { Component } from "react";
import OverviewCards from "./overview-cards";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog as iconSetting } from "@fortawesome/free-solid-svg-icons";
import { grayColor } from '../../../assets/globalStyleProperties'
import AddIcon from '@material-ui/icons/Add';
import MuiIconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../../assets/globalStyleProperties' 
const IconButton = withStyles({
  root:{
    backgroundColor: primaryColor[0],
    color:'white'
  }
})(MuiIconButton);

class Overview extends Component {
  state = {
    cardsOrder: [0, 1, 2, 3],
  };

  handleClickSetting() {
    let newOrder = [...this.state.cardsOrder];
    newOrder.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    this.setState({ cardsOrder: newOrder });
  }

  render() {
    return (
      <section className="overview" style={{color:grayColor[1]}}>

        <div style={{textAlign:'left', marginTop:10, display:'flex', marginBottom:10}}>
          <h3>Overview</h3>
            <IconButton color="#ffffff" style={{marginLeft:'auto'}}>
              <AddIcon />
            </IconButton>
        </div>



        <OverviewCards cardsOrder={this.state.cardsOrder} />
      </section>
    );
  }
}

export default Overview;
