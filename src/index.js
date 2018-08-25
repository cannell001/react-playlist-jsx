import React from 'react';
import { render } from 'react-dom';
import { TodoComponent } from './app/ToDo';

var myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: 3.50 };

render(
	<TodoComponent cheese={myCheese}/>,
	document.getElementById('todo-wrapper')
)
