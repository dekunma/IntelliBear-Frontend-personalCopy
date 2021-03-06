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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
    width: '100%',
    height: '70%',
    borderRadius: '15px',
    boxShadow: '0px 3px 15px #C2CFDD29',
    opacity: '1'
  },
  divider: {
    margin: theme.spacing(2),
  },
  pos: {
    marginBottom: 12,
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

const POSForecastCard = () => {
    const classes = useStyles();

    const [time, setTime] = React.useState(0);
    const [form, setForm] = React.useState(0);
    const [timeRange, setTimeRange] = React.useState('Tomorrow');
    const [dishType, setDishType] = React.useState(0);

    const handleDishTypeChange = (event, newValue) => {
        setDishType(newValue);
    };

    const handleChange = (event) => {
        setTimeRange(event.target.value);
    };

    return (
        <Card className={classes.root}>
        <CardContent>
          <Grid justify='space-between' container>
              <Grid item>
                <BottomNavigation
                    value={time}
                    onChange={(event, newValue) => {
                        setTime(newValue);
                    }}
                    showLabels
                    className={classes.nav}
                >
                    <BottomNavigationAction classes={{ root: classes.navButton, selected: classes.selected, label: classes.checkboxLabelA }} label="Day" />
                    <BottomNavigationAction classes={{ root: classes.navButton, selected: classes.selected, label: classes.checkboxLabelA }} label="Hour" />
                </BottomNavigation>
              </Grid>
              <Grid item>
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
                <Tab classes={{ root: classes.tab, selected: classes.tabSelected }} label="前菜" />
                <Tab classes={{ root: classes.tab, selected: classes.tabSelected }}  label="小炒" />
                <Tab classes={{ root: classes.tab, selected: classes.tabSelected }}  label="主菜" />
                <Tab classes={{ root: classes.tab, selected: classes.tabSelected }}  label="汤类" />
                <Tab classes={{ root: classes.tab, selected: classes.tabSelected }}  label="小吃" />
                <Tab classes={{ root: classes.tab, selected: classes.tabSelected }}  label="酒水" />
            </Tabs>

            <Divider className={classes.divider} />
          
        </CardContent>
      </Card>
    )
};

export default POSForecastCard