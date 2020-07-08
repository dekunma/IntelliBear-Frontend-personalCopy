import React, { Component } from "react";

class CardTotalSales extends Component {
    state = {
        data: {
            cur: 38062,
            prev: 30037
        }
    };

    calcYoY() {
        let d = this.state.data;
        return (((d.cur - d.prev) / d.prev) * 100).toFixed(2);
    }

    render() {
        return (
            <section className="card">
                <div className = "header-container">
                    <h5 className="header-text">Total Sales Today</h5>
                    <button className="view-more">View More</button>
                </div>
                <div className="text-container">
                    <br></br>
                    <br></br>
                    <span className="text-large">$ {this.state.data.cur}</span>
                </div>
                <div className="text-container">
                    <br></br>
                    <span className="text-medium">MoM: </span>
                    <span className="text-medium">{this.calcYoY()}%</span>
                    <span className="text-medium">({this.state.data.prev})</span>
                </div>
            </section>
        );
    }
}

export default CardTotalSales;
