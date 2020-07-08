// import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

// import logo
import logo from "../../assets/logo/intellibear_logo_512.png";

// class NavBar extends Component {
//   render() {
//     return (
//       <div className="adminNavBar">
//         <div className="navbar-wrapper">
//           <div className="navbar-logo">
//             <Link to="/dashboard">
//               <img src={logo} alt="IntelliBear Logo"></img>
//             </Link>
//             <h1>
//               <span>Intellibear</span>
//             </h1>
//           </div>
//           <div className="navbarMenu"></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NavBar;

import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider'
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useSelector, useDispatch } from 'react-redux'
import { mobileDrawerToggle } from '../../../actions/mobileDrawerAction'

import { grayColor, primaryColor } from '../../assets/globalStyleProperties'


const LocationSelector = withStyles({
  root: {
     '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor[0],
     },
     width:'150px',
     marginTop:'5px'
  }
})(TextField);

const locations = ['La Jolla', "Los Angelas", "Irvine"]

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    // marginLeft: drawerWidth,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
    background:'#FFFFFF',
    boxShadow:'none',
    borderBottom:'2px solid #cbcbcb'

  },
  navBarLogo: {
    display:'inline'
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const mobileDrawerOpen = useSelector(state => state.mobileDrawerOpen)
  const dispatch = useDispatch()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  let history = useHistory()
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        Choice 1
      </MenuItem>
      <Divider/>
      <MenuItem>
        Choice 2
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  return (
    <div className={classes.grow}> 

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{color:grayColor[1]}}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
              onClick={ev => dispatch(mobileDrawerToggle())}
            >
              <MenuIcon />
            </IconButton>
            <ListItem style={{width:'60px'}}> 
              <Link to="/admin/overview">
                  <img style={{height:'50px', width:'50px'}}src={logo} alt="IntelliBear Logo"></img>
                </Link>
            </ListItem>
            <ListItem>
              <h3>
                <div style={{
                    fontFamily: "Righteous",
                    fontWeight: 400,
                    color: '#f7941d',
                    marginTop:'10px',
                    userSelect:'none'
                }}>Intellibear</div>
              </h3>
            </ListItem>
                        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <LocationSelector
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon style={{color:primaryColor[0]}}/>
                  </InputAdornment>
                ),
              }}
              select
            >
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </LocationSelector>

            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <NotificationsIcon/>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <SettingsIcon/>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}