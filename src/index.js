import React from 'react';
import { render } from 'react-dom';
import { TodoComponent } from './app/ToDo';

render(
	<TodoComponent msg="who cut the cheese"/>,
	document.getElementById('todo-wrapper')
)
