import React, { Component } from "react";
import mapLogo from './mapLogo.png';
import yelpLogo from './yelpLogo.png';
import Avatar from '@material-ui/core/Avatar';
import ava1 from './ava1.png';
import ava2 from './ava2.png';
import ava3 from './ava3.png';
import ava4 from './ava4.png';
import defaultAva from './defaultAva.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Moment from 'react-moment';
import { Chart } from "react-google-charts";
import { Typography } from "@material-ui/core";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { grayColor } from '../../../assets/globalStyleProperties'
class CustomerReview extends React.Component {


  state = {
    data: [
      { avatarFile: ava1, name: "Patrick Lee", date: '2020-05-08T12:59-0700', content: "A customer review is a review of a product or service made by a customer who has purchased and used, or had experience with, the product or service. Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.", rating: 5, source: "google" },
      { avatarFile: null, name: "Jane Kwon", date: '2020-05-08T15:39-0700', content: "Content 2", rating: 3.5, source: "yelp" },
      { avatarFile: ava2, name: "Jane Kwon", date: '2020-05-07T14:15-0700', content: "Content 2", rating: 4.5, source: "google" },
      { avatarFile: ava3, name: "Jane Kwon", date: '2020-04-30T09:30-0700', content: "Content 2", rating: 1.5, source: "yelp" },
      { avatarFile: null, name: "Jane Kwon", date: '2020-04-20T18:30-0700', content: "Content 2", rating: 2.5, source: "yelp" },
      { avatarFile: null, name: "Jane Kwon", date: '2020-04-28T11:20-0700', content: "Content 2", rating: 3, source: "google" },
      { avatarFile: ava4, name: "Jane Kwon", date: '2020-04-07T10:30-0700', content: "Content 2", rating: 5, source: "yelp" },
      { avatarFile: null, name: "Jane Kwon", date: '2020-04-07T10:30-0700', content: "Content 2", rating: 4, source: "yelp" },
      { avatarFile: null, name: "Jane Kwon", date: '2020-04-07T10:30-0700', content: "Content 2", rating: 2, source: "yelp" },
      { avatarFile: null, name: "Jane Kwon", date: '2020-04-07T10:30-0700', content: "Content 2", rating: 1, source: "yelp" },
      { avatarFile: ava1, name: "Patrick Lee", date: '2020-05-08T12:59-0700', content: "A customer review is a review of a product or service made by a customer who has purchased and used, or had experience with, the product or service. Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.", rating: 5, source: "google" },
      { avatarFile: null, name: "User", date: '2020-03-30T10:30-0700', content: "A customer review is a review of a product or service made by a customer who has purchased and used, or had experience with, the product or service. Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.", rating: 4, source: "yelp" },

    ],
    order: 'Newest',
  };

//Generate the stars icon according to the rating data
  genStars(rating) {
    let numFull = Math.floor(rating);
    let numHalf = (rating !== numFull) | 0;
    let numEmpty = 5 - numFull - numHalf;

    return (
      <div>
        {Array(numFull)
          .fill()
          .map((n, idx) => (
            <StarIcon style={{ fill: '#f7941d', fontSize: '1.3rem' }} key={idx} />
          ))}
        {Array(numHalf)
          .fill()
          .map((n, idx) => (
            <StarHalfIcon style={{ fill: '#f7941d', fontSize: '1.3rem' }} key={idx} />
          ))}
        {Array(numEmpty)
          .fill()
          .map((n, idx) => (
            <StarBorderIcon style={{ fill: '#f7941d', fontSize: '1.3rem' }} key={idx} />
          ))}
      </div>
    );
  }

  //generate the source icon, either google or yelp in accordance to the customer's account source
  genSourceIcon(source) {
    if (source === "google") {
      return <img style={{ height: '24px', width: '24px' }} src={mapLogo} />
    }
    return <img style={{ height: '24px', width: '24px' }} src={yelpLogo} />
  }

  //generate the avatar of the customer if the customer has one
  //otherwise, generate default avatar 
  genAvatar(avatarFile) {
    if (avatarFile === null) {
      return <Avatar style={{
        width: '60px',
        height: '60px'
      }} src={defaultAva} />
    }
    return <Avatar style={{
      width: '60px',
      height: '60px'
    }} src={avatarFile} />
  }

  //the order of the customer reviews display according to the selected option
  //Newest / Oldest / Highest / Lowest
  displayOrder(data, order) {
    var sorted = data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    if (order === 'Newest') {
      sorted = sorted.reverse();
    }
    else if (order === 'Lowest') {
      sorted = data.slice().sort((a, b) => a.rating - b.rating);
    }
    else if (order === 'Highest') {
      sorted = data.slice().sort((a, b) => a.rating - b.rating);
      sorted = sorted.reverse();
    }

    return sorted;
  }

  //calculate the average rating
  avgRating(data) {
    let averageRating = 0;
    data.forEach((review) => {
      averageRating += review.rating;
    });
    averageRating = averageRating / data.length;
    averageRating = Math.round(averageRating * 10) / 10
    return averageRating;

  }

  //compile data for the pie chart
  starNum(data) {
    let countList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    data.forEach((review) => {
      if (review.rating === 5) {
        countList[0]++;
      }
      else if (review.rating === 4.5) {
        countList[1]++;
      }
      else if (review.rating === 4) {
        countList[2]++;
      }
      else if (review.rating === 3.5) {
        countList[3]++;
      }
      else if (review.rating === 3) {
        countList[4]++;
      }
      else if (review.rating === 2.5) {
        countList[5]++;
      }
      else if (review.rating === 2) {
        countList[6]++;
      }
      else if (review.rating === 1.5) {
        countList[7]++;
      }
      else {
        countList[8]++;
      }
    });
    return countList;
  }

  //get the current week average rating
  currentWeek(data) {
    var sorted = data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    sorted = sorted.reverse();
    var currWeekRate = 0;
    var count = 0;
    var curr = new Date();
    sorted.map((entry, index) => {
      if (moment(curr).diff(entry.date, 'days') <= 7) {
        currWeekRate += entry.rating;
        count++;
      }
      else {

        return currWeekRate / count;
      }
    })
    return currWeekRate / count;

  }

  //get last week's average rating
  lastWeek(data) {
    var sorted = data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    sorted = sorted.reverse();
    var lastWeekRate = 0;
    var count = 0;
    var curr = new Date();
    sorted.map((entry, index) => {

      if (moment(curr).diff(entry.date, 'days') > 7 && moment(curr).diff(entry.date, 'days') <= 14) {
        lastWeekRate += entry.rating;
        count++;
      }
      else {
        return lastWeekRate / count;
      }
    })
    return lastWeekRate / count;

  }

  //calculating weekly growth
  growthNum(data) {
    var result = Math.round((this.currentWeek(data) - this.lastWeek(data)) * 10) / 10;
    if (result > 0) {
      return '+' + result;
    }
    else {
      return '-' + result;
    }
  }


  render() {
    const d = this.state.data;
    const calendarStrings = {
      lastDay: '[Yesterday] HH:mm',
      sameDay: '[Today] HH:mm',
      sameElse: 'MMM DD YYYY HH:mm'
    }
    const layout = [
      {
        i: 'review', x: 0, y: 0, w: 1.3, h: 3.5, isDraggable: false,
        isResizable: false,
      },
      {
        i: 'source', x: 1.3, y: 0, w: 0.7, h: 0.6, isDraggable: false,
        isResizable: false, transformScale: '1',
      },
      {
        i: 'summary', x: 1.3, y: 1, w: 0.7, h: 1.2, isDraggable: false,
        isResizable: false,
      }
    ];

    const totalReivews = this.state.data.length;


    const handleChange = (event) => {
      this.setState({
        order: event.target.value
      })

    };

    const BootstrapInput = withStyles(theme => ({
      root: {
        'label + &': {
          marginTop: theme.spacing.unit * 3
        }
      },
      input: {
        width: '120px',
        height: '15px',
        borderRadius: 4,
        position: 'relative',
        backgroundImage: "linear-gradient(to right, #f7fafc 85%, #f7941d 15%)",
        fontSize: 16,
        padding: '5px 0px 6px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 5,
          borderColor: '#ffffff',
          boxShadow: '0 0 0 0.1rem #cccccc'
        }
      }
    }))(InputBase);

    return (

      <section style={{ backgroundColor: "#f7fafc", marginTop:'60px', listStyle:'none', overflowX:'hidden',overflowY:'hidden' }}>
        <div><Typography style={{
          textAlign: "left",
          fontSize: "1.5rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1.5rem", 
          fontWeight: 'bold',
          color:grayColor[1]

        }}>Customer Review</Typography></div>
        <Grid container spacing={3}>
          <Grid item md={8} alignItems='flex-end' height='95%'>
            <div style={{
              backgroundColor: "#ffffff", border: '1px solid white', borderRadius: '10px',
              boxShadow: '0px 0px 5px #cccccc',
              marginLeft: '20px', marginBottom: '1.5rem'
            }} key="review">

              <div className="container">

                <div style={{
                  textAlign: 'left',
                  marginLeft: '1.5rem',
                  marginTop: '1rem',
                  marginBottom: '2rem'
                }}>

                  <NativeSelect disableUnderline id='select' defaultValue={'Newest'}
                    onChange={handleChange} input={<BootstrapInput />} >
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Lowest'>Lowest</option>
                    <option value='Highest'>Highest</option>
                  </NativeSelect>

                </div>


                {this.displayOrder(d, this.state.order).map((entry, idx) => (
                  <li key={idx} style={{ marginTop: '0.5rem', borderTop: '1px solid #e6e6e6' }}>
                    <div style={{ float: 'left', marginTop: '1rem', marginLeft: '1rem' }}>{this.genAvatar(entry.avatarFile)}</div>
                    <div className="headLine" style={{ textAlign: 'left', position: 'relative', marginTop: '1rem' }}>
                      <span style={{ display: 'inline-block', marginLeft: '1.5rem', fontWeight: 'bold' }}>{entry.name}</span>
                      <span style={{ display: 'inline-block', marginLeft: '2rem' }}>{this.genStars(entry.rating)}</span>
                      <span style={{ display: 'inline-block', marginLeft: '1.5rem' }}>{this.genSourceIcon(entry.source)}</span>
                      <span style={{ right: '1rem', position: 'absolute', fontSize: '0.8rem' }}>
                        <Moment calendar={calendarStrings} withTitle>{entry.date}</Moment></span>
                    </div>
                    <div className="description" style={{ textAlign: 'left', marginLeft: '6.2rem', marginTop: '1rem', marginRight: '2rem', marginBottom: '2rem' }}>
                      {entry.content}
                    </div>
                    <div onClick={e => console.log("Clicked")} style={{ float: 'right', bottom: '1.5rem', textAlign: 'right', justifyContent: 'flex-end', position: 'relative', color: '#f7941d', fontSize: '0.8rem' }}>View Original <ArrowForwardIcon style={{ fill: '#f7941d', fontSize: '1rem' }} /></div>
                  </li>
                ))}

              </div>
            </div>
          </Grid>

          <Grid item md={4}>
            <div style={{
              backgroundColor: "#ffffff",
              textAlign: "left",
              fontSize: "1.1rem",
              paddingTop: "0.8rem",
              paddingLeft: "1.5rem",
              color: '#f7941d', border: '1px solid white', borderRadius: '10px',
              boxShadow: '0px 0px 5px #cccccc',
              marginBottom: '20px', width: '95%'
            }} key="source">
              <div style={{ fontWeight: 'bold', color: '#f7941d' }}>Data Source</div>

              <ul style={{ columnCount: 2, width: '70%', textAlign: 'center', marginLeft: '7%', marginTop: '3%', listStyle:'none' }}>
                <li style={{ width: '20%' }}>
                  <img style={{ height: '80px', width: '80px' }} src={mapLogo} alt="Map" />

                </li>
                <li style={{ width: '100%', fontSize: '0.8rem' }}>Google Map</li>
                <li style={{ width: '20%' }}>
                  <img style={{ height: '80px', width: '80px' }} src={yelpLogo} alt="Yelp" />
                </li>
                <li style={{ width: '100%', fontSize: '0.8rem' }}>Yelp</li>

              </ul>

            </div>

            <div style={{
              background: '#ffffff', textAlign: 'left', textAlign: 'left', fontSize: "1.1rem", paddingTop: "0.8rem", paddingLeft: "1rem", color: '#f7941d',
              border: '1px solid white', borderRadius: '10px',
              boxShadow: '0px 0px 5px #cccccc', width: '95%'
            }} key="summary">
              <div style={{ fontWeight: 'bold', color: '#f7941d' }}>Review Summary</div>


              <ul style={{ columnGap: '0.3rem', columnCount: 3, textAlign: 'center', marginTop: '5%', paddingLeft: 0, borderBottom: '1px solid #e6e6e6', marginRight: "1rem", listStyle:'none'  }}>
                <li style={{ fontSize: "0.8rem", borderRight: '1px solid #e6e6e6', width: '100%' }}>Total Review</li>
                <li style={{ fontSize: '2rem', borderRight: '1px solid #e6e6e6', width: '100%' }}>{totalReivews}</li>
                <li style={{ fontSize: "0.8rem", borderRight: '1px solid #e6e6e6', width: '100%' }}>Average Rating</li>
                <li style={{ fontSize: '2rem', borderRight: '1px solid #e6e6e6', width: '100%' }}>{this.avgRating(d)}</li>
                <li style={{ fontSize: "0.8rem", width: '100%' }}>Weekly Growth</li>
                <li style={{ fontSize: '2rem', width: '100%' }}>{this.growthNum(d)}</li>

              </ul>


              <Chart

                width={'350px'}
                height={'250px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Star', 'Rating'],
                  ['5', this.starNum(d)[0]],
                  ['4.5', this.starNum(d)[1]],
                  ['4', this.starNum(d)[2]],
                  ['3.5', (this.starNum(d)[3])],
                  ['3', this.starNum(d)[4]],
                  ['2.5', this.starNum(d)[5]],
                  ['2', this.starNum(d)[6]],
                  ['1.5', this.starNum(d)[7]],
                  ['1', this.starNum(d)[8]],
                ]}
                options={{
                  backgroundColor: "transparent",
                  chartArea: { left: 25, top: 0, width: '100%', height: '95%' },
                  legend: { alignment: 'center' },
                  slices: [{ color: "#4d4dff" }, { color: "#4d94ff" },
                  { color: "#4ddbff" }, { color: "#4dffdb" }, { color: "#ffdb4d" },
                  { color: "#ffc34d" }, { color: "#ffa64d" }, { color: "#ff704d" },
                  { color: "#ff4d4d" }]
                }}
                rootProps={{ 'data-testid': '1' }}
              />

            </div>
          </Grid>


        </Grid>
      </section>

    );
  }
}

export default CustomerReview;







