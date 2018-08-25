import React, { Component } from 'react';

//Create a component
export default class TodoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
            todos: ['drink tea', 'walk the dog', 'wash the dishes', 'cut the cheese', 'take a nap']
        };
    }
    //getInitialState
    render(){
		var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                    <li>`{item}...!`</li>
            );
        });
        return(
            <div id="todo-list">
                <p>React stuff goes here...</p>
				<ul>{todos}</ul>
            </div>
        );
    } //render
}
