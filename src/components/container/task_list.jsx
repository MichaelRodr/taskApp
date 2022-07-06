import React, {useState, useEffect} from 'react';
import {Task} from '../../models/task.class';
import {LEVELS} from '../../models/level.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

/* Es el componente padre de (TaskComponent)el cual pasa datos como props a sus componentes hijos (datos primitivo, objetos complejos y funciones)*/

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    'Example1',
    'Description1',
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    'Example2',
    'Description2',
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    'Example3',
    'description3',
    false,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  };

  return (
    <div className='col-12'>
      <div class='card'>
        {/*Card Header (tiltle) */}
        <div className='card-header p-3'>
          <h5>Your Tasks:</h5>
        </div>
        <div
          className='card-body'
          data-mdb-perfect-scrollbar='true'
          style={{position: 'relative', height: '400px'}}
        >
          <table>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Priority</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                return <TaskComponent key={index} task={task}></TaskComponent>;
              })}
            </tbody>
          </table>
        </div>
        <TaskForm></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
