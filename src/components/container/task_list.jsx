import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/task';


/* Es el componente padre de (TaskComponent)el cual pasa datos como props a sus componentes hijos (datos primitivo, objetos complejos y funciones)*/

const TaskListComponent = () => {
 
	const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL);



	return (
		<div>
			<h1>
        Your Tasks:
			</h1>
			{/*Todo Aplicar un for/map para renderizar una lista*/}
			<TaskComponent task={defaultTask} ></TaskComponent>
		</div>
	);
};





export default TaskListComponent;
