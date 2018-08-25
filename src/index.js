import React from 'react';
import { render } from 'react-dom';
import { TodoComponent } from './app/ToDo';

render(
	<TodoComponent/>,
	document.getElementById('todo-wrapper')
)
