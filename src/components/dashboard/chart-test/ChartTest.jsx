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
    date: 'Sun Feb 23', Revenue: 600
  },
  {
    date: 'Mon Feb 24', Revenue: 1000
  },
  {
    date: 'Tue Feb 25', Revenue: 750
  },
  {
    date: 'Web Feb 26', Revenue: 600
  },
  {
    date: 'Thu Feb 27', Revenue: 750
  },
  {
    date: 'Fri Feb 28', Revenue: 1250
  },
  {
    date: 'Sat Feb 29', Revenue: 1100
  },
];

class ChartTest extends PureComponent {
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
      <div style={{width:1000, height:600}}>
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
          <Line type="monotone" dataKey="Revenue" stroke={primaryColor[0]} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>

      
    );
  }
}

export default withStyles(styles)(ChartTest)