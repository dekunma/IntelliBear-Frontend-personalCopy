import React, { Component } from "react";
import Select from "react-select";
import Table from './table/table'
import { Scrollbars } from 'react-custom-scrollbars';

class CardTop5Food extends Component {
    state = {
        data: [
            //"San Diego": [
            //    { name: "Cumin Ribs", sold: 100 },
            //    { name: "Chicken Soup", sold: 97 },
            //    { name: "Lamb Pot", sold: 75 },
            //    { name: "Golden Soup Beef", sold: 48 },
            //    { name: "Potato Sliced Wok", sold: 71 },
            //    { name: "Steamed Rice", sold: 85 },
            //    { name: "Ice Jelly", sold: 19 }
            //],
            { rank: 1, name: "Cumin Ribs", sold: 75 },
            { rank: 2,name: "Chicken Soup", sold: 87 },
            { rank: 3,name: "Lamb Pot", sold: 112 },
            { rank: 4,name: "Golden Soup Beef", sold: 74 },
            { rank: 5,name: "Potato Sliced Wok", sold: 81 },
            { rank: 6,name: "Steamed Rice", sold: 89 },
            { rank: 7,name: "Ice Jelly", sold: 65 }
            
        ]
    };
    constructor(props) {
        super(props);
        //let options = [];
        //Object.keys(state.data).forEach((loc) => {
        //    options.push({value: loc, label: loc});
        //})
        //state.options = options;
        //this.state = state;
        //this.tableContents = this.populateTable(options[0].value);
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

    //populateTable(loc) {
    //    let d = this.state.data[loc];
    //    d = d
    //        .sort(function(a, b) {
    //            return b.sold - a.sold;
    //        })
    //        .slice(0, 5);
    //
    //    return (
    //        <tbody>
    //            {d.map((entry, idx) => (
    //                <tr key={idx}>
    //                    <td>{idx + 1}</td>
    //                    <td>{entry.name}</td>
    //                    <td>{entry.sold}</td>
    //                </tr>
    //            ))}
    //        </tbody>
    //    );
    //}

    //handleSelectChange = selectedLoc => {
    //    this.setState({tableContents: this.populateTable(selectedLoc.value)});
    //}

    //populateSelect() {
    //    return (
    //        <Select
    //            onChange={this.handleSelectChange}
    //            options={this.state.options}
    //            placeholder="Location"
    //        />
    //    );
    //}

    render() {
        return (
            <section className="card">
                <div className = "header-container">
                    <h5 className="header-text">Top 5 Food Last 90 Days</h5>
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
					tableHead={["Rank", "Name", "Sales"]}
					tableData={this.formulateData()}
				/>
                </Scrollbars>
            </section>
            
            
            //                    <table>
            //            <thead>
            //                <tr>
            //                    <th>Rank</th>
            //                    <th>Name</th>
            //                    <th># Sold</th>
            //                </tr>
            //            </thead>
            //        </table>
        );
    }
}

export default CardTop5Food;
