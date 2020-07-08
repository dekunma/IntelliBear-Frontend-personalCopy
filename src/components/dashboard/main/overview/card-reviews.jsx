import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as iconFullStar,
  faStarHalfAlt as iconHalfStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as iconEmptyStar } from "@fortawesome/free-regular-svg-icons";
import Table from './table/table'
import { Scrollbars } from 'react-custom-scrollbars';

class CardReviews extends Component {
  state = {
    data: [
      { date: "04/18/2020", source: "Yelp", rating: this.genStars(5) },
      { date: "04/18/2020", source: "Yelp", rating: this.genStars(4.5) },
      { date: "04/18/2020", source: "Yelp", rating: this.genStars(4) },
      { date: "04/17/2020", source: "Google Map", rating: this.genStars(3.5) },
      { date: "04/17/2020", source: "Yelp", rating: this.genStars(3) },
      { date: "04/17/2020", source: "Yelp", rating: this.genStars(2) },
      { date: "04/17/2020", source: "Yelp", rating: this.genStars(1) },
      { date: "04/16/2020", source: "Google Map", rating: this.genStars(0.5) },
      { date: "04/15/2020", source: "Google Map", rating: this.genStars(0) },
    ],
  };

  genStars(rating) {
    let numFull = Math.floor(rating);
    let numHalf = (rating !== numFull) | 0;
    let numEmpty = 5 - numFull - numHalf;

    return (
      <div>
        {Array(numFull)
          .fill()
          .map((n, idx) => (
            <FontAwesomeIcon icon={iconFullStar} key={idx} />
          ))}
        {Array(numHalf)
          .fill()
          .map((n, idx) => (
            <FontAwesomeIcon icon={iconHalfStar} key={idx} />
          ))}
        {Array(numEmpty)
          .fill()
          .map((n, idx) => (
            <FontAwesomeIcon icon={iconEmptyStar} key={idx} />
          ))}
      </div>
    );
  }

  populateTable() {
    let d = this.state.data;

    return (
      <tbody>
        {d.map((entry, idx) => (
          <tr key={idx}>
            <td>{entry.date}</td>
            <td>{entry.loc}</td>
            <td>{this.genStars(entry.rating)}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  formulateData = () => {
    let { data } = this.state
    let table = []
    data.map(d => {
        let row = Object.values(d)
        table.push(row)
    })
    return table
};

  render() {
    return (
      <section className="card">
        <div className = "header-container">
          <h5 className="header-text">Customer Review</h5>
          <button className="view-more">View More</button>
        </div>
        <Scrollbars
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					thumbMinSize={30}
				>
				<Table
					tableHeaderColor="grayColor"
					tableHead={["Date", "Source", "Rating"]}
					tableData={this.formulateData()}
				/>
        </Scrollbars>
        
        {/* <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        {this.populateTable()}
                    </table>
                </div> */}
      </section>
    );
  }
}

export default CardReviews;
