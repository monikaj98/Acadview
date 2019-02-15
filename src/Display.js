import React, { Component } from 'react';
class Display extends Component{
    render(){
        console.log(this.props);
        return(
        <div>
            <div>Name: {this.props.Name}</div>
            <div>Age: {this.props.Age}</div>
            <div>Birth-month: {this.props.Birthmonth}</div>
            <div>Birth-Year: {this.props.BirthYear}</div>
        </div>
        )
    }
}
export default Display;