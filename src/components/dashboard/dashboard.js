import React from 'react';
import Drawer from '@material-ui/core/SwipeableDrawer';
import NavBar from './navBar/navBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import '../dashboard/main/overview/overview.css'
import SideBar from './sideBar/sideBar'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mobileDrawerToggle } from '../../actions/mobileDrawerAction'
import Hidden from '@material-ui/core/Hidden';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { routes } from "./routes";

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.appBar - 1
  },
  drawerPaper: {
    width: drawerWidth,
    border:'none' //为了覆盖Mui自带的该死的border
  },
  drawerContainer: {
    overflow: 'auto',
    marginTop:-2
  }
});

class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { classes } = this.props

    return(
      <div className={classes.root}>
        <CssBaseline />
        <Router>
        <NavBar/>

        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor='left'
            open={this.props.mobileDrawerOpen}
            onClose={this.props.mobileDrawerToggle}
            className={classes.drawer}
          >
            <Toolbar /> 
            <div className={classes.drawerContainer} style={{width:'200px'}}>
              <SideBar history={this.props.history}/>
            </div>
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css" className={classes.drawer}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar /> 
            <div className={classes.drawerContainer}>
              <SideBar history={this.props.history}/>
            </div>
          </Drawer>
        </Hidden>

        <div className="admin-wrapper" style={{width:'100%'}}>

            <div className="admin-component-wrapper">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={route.path}
                    path={"/admin/" + route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
              <Redirect to="/admin/overview" />
            </div>
        </div>
        </Router>
      </div>
    )
  }
}

Dashboard.propTypes = {
  mobileDrawerOpen: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  mobileDrawerOpen: state.mobileDrawerOpen,
});

export default connect(mapStateToProps, { mobileDrawerToggle })(withStyles(styles)(Dashboard));