import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, CartesianAxis, ResponsiveContainer, Tooltip, Legend,
} from 'recharts';

import { primaryColor, grayColor } from '../../assets/globalStyleProperties'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

})

const data = [
  {
    date: 'Sun Feb 23', 
    Actual:42, 
    Forecast:38
  },
  {
    date: 'Mon Feb 24', 
    Actual: 32,
    Forecast: 37
  },
  {
    date: 'Tue Feb 25', 
    Actual: 25,
    Forecast: 20
  },
  {
    date: 'Web Feb 26', 
    Actual: 30,
    Forecast: 33
  },
  {
    date: 'Thu Feb 27', 
    Actual: 32,
    Forecast:30
  },
  {
    date: 'Fri Feb 28', 
    Actual: 42,
    Forecast: 40
  },
  {
    date: 'Sat Feb 29', 
    Actual: 38,
    Forecast: 42
  },
];

class TwoLineChart extends PureComponent {
  constructor(props){
    super(props)
  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  componentDidMount(){
    console.log(CartesianGrid)
  }

  render() {
    
    const { classes } = this.props 

    return (
      <div style={{width:this.props.width, height:this.props.height}}>
      <ResponsiveContainer
        height='100%'
        width='100%'
      >
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          style={{color:grayColor[1]}}
        >
          <CartesianGrid strokeDasharray="0" vertical={false}/>
          <XAxis dataKey="date" stroke={grayColor[1]}/>
          <YAxis stroke={grayColor[1]}/>
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Actual" stroke={primaryColor[0]}  />
          <Line type="monotone" dataKey="Forecast" stroke={grayColor[0]}  />

        </LineChart>
      </ResponsiveContainer>
      </div>
      
    );
  }
}

TwoLineChart.defaultProps = {
    width:800,
    height:400
}


export default withStyles(styles)(TwoLineChart)