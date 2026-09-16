import React, { Component } from 'react'

// class Car extends Component {
//     render(){
//         console.log("Car created");
//         return(
//             <div className={this.props.active ? "car-card" : "car-card car-card--discontinued"}>
//                 <h2>CAR</h2>
//                 <ul>
//                     <li>Name: {this.props.name}</li>
//                     <li>Year: {this.props.year}</li>
//                     <li>Active: {this.props.active ? "Yes" : "No"}</li>
//                 </ul>
//             </div>
//         );
//     }
// }

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            year: props.year,
            active: props.active
        };
    }render(){
        return(
            <div className={this.state.active ? "info-card" : "info-card info-card--inactive"}>
                <h2>CAR</h2>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Year: {this.state.year}</li>
                    <li>Active: {this.state.active ? "Yes" : "No"}</li>
                </ul>
            </div>
        );
    }
}
 
export default Car