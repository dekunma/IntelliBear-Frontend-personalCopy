import React, { Component } from "react";
import Table from './table/table'
import { Scrollbars } from 'react-custom-scrollbars';

class CardSalesBudget extends Component {
    state = {
        data: [
            { Week: "04/12-04/18", Sales: 10000, Budget: 8000, Difference: "+2000" },
            { Week: "04/05-04/11", Sales: 3000, Budget: 4000, Difference: "-1000" },
            { Week: "03/29-04/04", Sales: 6000, Budget: 4000, Difference: "+2000" },
            { Week: "03/22-03/28", Sales: 20000, Budget: 15000, Difference: "+5000" },
            { Week: "03/15-03/21", Sales: 1700, Budget: 1500, Difference: "+200" }
        ]
    };

    formulateData = () => {
        let { data } = this.state
        let table = []
        data.map(d => {
            let row = Object.values(d)
            table.push(row)
        })
        return table
    };

    // populateTable() {
    //     let d = this.state.data;
    //     return (
    //         <tbody>
    //             {d.map((entry, idx) => (
    //                 <tr key={idx}>
    //                     <td>{entry.loc}</td>
    //                     <td>{entry.sales}</td>
    //                     <td>{entry.budget}</td>
    //                     <td>{entry.sales - entry.budget}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     );
    // }

    render() {
        return (
            <section className="card">
                <div className = "header-container">
                    <h5 className="header-text">Sales vs. Budget WTD</h5>
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
										tableHead={["Week", "Sales", "Bugest", "Difference"]}
										tableData={this.formulateData()}
									/>
								</Scrollbars>
            </section>
        );
    }
}

export default CardSalesBudget;
