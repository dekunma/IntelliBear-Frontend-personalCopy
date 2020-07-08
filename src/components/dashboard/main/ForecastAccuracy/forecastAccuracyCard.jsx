import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import DishGroup from './forecast-dishGroup';
import { dishCategories } from './data.js'
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeDishType } from '../../../../actions/handleChangeDishType'
import Hidden from '@material-ui/core/Hidden'
import TwoLineChart from '../../chart-test/TwoLineChart'

//For tab panels
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <DishGroup items={props.items}/>
        )}
      </div>
    );
};
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    boxShadow: '0px 3px 15px #C2CFDD29',
    opacity: '1'
  },
    divider: {
    margin: theme.spacing(2),
  },
  nav: {
    width: 180,
    height: 30,
    backgroundColor: '#f7fafc',
    borderRadius: '7px',
  },
  navButton: {
      color: '#5D686F',
      padding: '0',
      backgroundColor: 'FFF6EB',
      '&$selected': {
        color: '#F7941D',
        backgroundColor: '#FFF6EB',
        borderRadius: '7px',
      },
  },
  selected: {},
  checkboxLabelA: {
    fontSize: 12
  },
  timeFrame: {
    alignItems: 'left'
  },
  formControl: {
    minWidth: 200,
    height: 30,
    backgroundColor: '#f7fafc',
    borderRadius: '7px'
  },
  select: {
    minWidth: 200,
    height: 30,
    backgroundColor: '#f7fafc',
    borderRadius: '7px',
    color: '#5D686F',
    fontSize: 14
  },
  menuItem: {
    color: '#5D686F',
    minWidth: 200,
    height: 30,
    backgroundColor: '#f7fafc',
    fontSize: 14
  },
  icon: {
    fill: '#F7941D',
  },
  paper: {
    flexGrow: 1,
  },
  tabs: {
    minWidth: 100,
    height: 20,
    color: '#5D686F',
  },
  tab: {
    width: 60,
    minWidth: 60,
    color: '#5D686F',
    "&$tabSelected": {
        color: "#F7941D",
    },
  },
  tabSelected: {},
  indicator: {
    backgroundColor: '#F7941D',
  },
}));

const ForecastAccuracyCard = () => {
    const classes = useStyles();

    const [time, setTime] = React.useState(0);
    const [form, setForm] = React.useState(0);
    const [timeRange, setTimeRange] = React.useState('Tomorrow');

    const dishType = useSelector(state => state.dishType)
    const dish = useSelector(state => state.dish)
    const dispatch = useDispatch()

    const handleDishTypeChange = (event, newValue) => {
        dispatch(handleChangeDishType(newValue))
    };

    const handleChange = (event) => {
        setTimeRange(event.target.value);
    };

    return (
        <Card className={classes.root}>
          <CardContent>
            <Grid container justify="space-between">
                <Grid  item>
                  <FormControl className={classes.formControl}>
                      <Select
                      disableUnderline
                      value={timeRange}
                      onChange={handleChange}
                      className={classes.select}
                      classes={{icon: classes.icon}}
                      >
                          <MenuItem className={classes.menuItem} value='Tomorrow'>Tomorrow</MenuItem>
                          <MenuItem className={classes.menuItem} value='Next Week'>Next Week</MenuItem>
                      </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <BottomNavigation
                          value={form}
                          onChange={(event, newValue) => {
                              setForm(newValue);
                          }}
                          showLabels
                          className={classes.nav}
                      >
                          <BottomNavigationAction classes={{root: classes.navButton, selected: classes.selected}} label="Chart" />
                          <BottomNavigationAction classes={{root: classes.navButton, selected: classes.selected}} label="Table" />
                  </BottomNavigation>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />    
              <Tabs
                  classes={{ root: classes.tabs, indicator: classes.indicator}} 
                  value={dishType}
                  onChange={handleDishTypeChange}
              > 
                {dishCategories.map(elem => (
                  <Tab 
                    classes={{ root: classes.tab, selected: classes.tabSelected }}  
                    label={elem.name} 
                    {...a11yProps(elem.id)}
                  />
                ))}
              </Tabs>

              {dishCategories.map(elem => (
                <TabPanel value={dishType} index={elem.id} items={elem.dishes} />
              ))}
                            

          </CardContent>
          {dish === '酸汤肥牛'
          ?
            <div>
              {/* 手机版chart */}
              <Hidden smUp implementation="css">
                <TwoLineChart width={400} height={200}/>
              </Hidden>

              {/* 电脑版chart */}
              <Hidden smDown implementation="css">
                <TwoLineChart/>
              </Hidden>
              
              

            </div>
          :<div/>
          }
        </Card>
    )
};

export default ForecastAccuracyCard