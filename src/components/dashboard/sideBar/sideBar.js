/**
 * 左边选tab的栏
 */

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { connect } from "react-redux";
import { handleChangeTab } from '../../../actions/handleChangeTab'
import { toggleTabOpen } from '../../../actions/toggleTabOpen'
import PropTypes from 'prop-types'

import { 
  primaryColor,
  grayColor
 } from '../../assets/globalStyleProperties'

import { Link } from "react-router-dom";


const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(3),
    '&:hover':{
      borderRight:'5px solid ' + primaryColor[0],
      color:grayColor[1]
    },
    color:grayColor[1]
  },

  nestedActive: {
    paddingLeft: theme.spacing(3),
    backgroundColor:grayColor[2],
    borderRight:'5px solid ' + primaryColor[0],
    color:primaryColor[0],
    '&:hover':{
      color:primaryColor[1]
    },
  },

  default: {
    '&:hover':{
      borderRight:'5px solid ' + primaryColor[0],
      color:grayColor[1]
    },
    color:grayColor[1]
  },

  active: {
    backgroundColor:grayColor[2],
    borderRight:'5px solid ' + primaryColor[0],
    color:primaryColor[0],
    '&:hover':{
      color:primaryColor[1]
    },
  }
});

//data for sideBar tabs
const tabs = [
  {linkTo:'overview', label:'Overview'},
  {
    linkTo:'sales', 
    label:'Sales',
    subItems:[
      { linkTo: "revenue", label: "Revenue" },
      { linkTo: "itemPerformance", label: "Item Performance" },
      { linkTo: "bostonMatrix", label: "Boston Matrix" },
    ],
    collapseId:0
  },
  {
    linkTo:'forecast',
    label: 'Forecast',
    subItems:[
      { linkTo: "POSForecast", label: "POS Forecast" },
      { linkTo: "forcastAccuracy", label: "Forecast Accuracy" },
    ],
    collapseId:1
  },
  {
    linkTo: "inventory",
    label: "Inventory",
  },
  {
    linkTo: "customerReview",
    label: "Customer Review",
  }
]

class SideBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentTab:'Overview'
    }
  }

  /**
   * when click a collapse tab
   */
  handleClickCollapseTab = (id) => {
    const tabOpen = this.props.tabOpen
    let newOpen = tabOpen
    newOpen[id] = !tabOpen[id]
    toggleTabOpen(newOpen)
    
    this.setState({open:newOpen})//历史遗留问题：我真没搞懂为什么必须要这一行才能work
  }

  /**
   * when active a tab, 把右边border变橘
   */
  handleActive = (name) => {
    this.props.handleChangeTab(name)
  }

  render(){
    const { classes } = this.props

    const {
      tab,
      tabOpen
    } = this.props

    return(
      <List>
        {tabs.map(elem => (
          elem.subItems
          //if a tab has subitems 
          ?
            <div>
              <ListItem style={{color:grayColor[1]}} button onClick={ev => this.handleClickCollapseTab(elem.collapseId)}>
                <ListItemText primary={elem.label} />
                {tabOpen[elem.collapseId] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={tabOpen[elem.collapseId]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  {elem.subItems.map(item => (
                    <ListItem 
                      button
                      onClick={ev => this.handleActive(item.label)}
                      component={Link}
                      to={'/admin/' + item.linkTo} 
                      className={
                        tab === item.label
                        ?classes.nestedActive
                        :classes.nested
                      }
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}

                </List>
              </Collapse>
            </div>
          :
          //if a tab does not have subitem
            <ListItem
                button
                onClick={ev => this.handleActive(elem.label)}
                component={Link}
                to={"/admin/" + elem.linkTo}
                className={
                  tab === elem.label
                  ?classes.active
                  :classes.default
                }
              >
              <ListItemText>{elem.label}</ListItemText>
            </ListItem>
        ))}
      </List>
    )
  }
}

SideBar.propTypes = {
  tab:PropTypes.string.isRequired,
  tabOpen:PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  tab:state.tab,
  tabOpen:state.tabOpen
})

export default connect(mapStateToProps, { handleChangeTab, toggleTabOpen })(withStyles(styles)(SideBar));
