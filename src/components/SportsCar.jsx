import React, { Component } from 'react'
import Car from './Car.jsx'

class SportsCar extends Car {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            hp: props.horsePower
        };
    }

    render() {
        return(
            <div className={this.state.active ? "info-card" : "info-card info-card--inactive"}>
                <h2>S. CAR</h2>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Year: {this.state.year}</li>
                    <li>Active: {this.state.active ? "Yes" : "No"}</li>
                    <li>HP: {this.state.hp}</li>
                </ul>
            </div>
        );
    }
}

export default SportsCar