import React, { Component } from 'react';

//Create a component using ES6 Class Syntax
export class TodoComponent extends Component{
    render(){
        return(
            <div>
                <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price: </strong>£{this.props.cheese.price}</p>
            </div>
        )
    }
}
