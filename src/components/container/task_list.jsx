import React, {useState, useEffect} from 'react';
import {Task} from '../../models/task.class';
import {LEVELS} from '../../models/level.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import {Link} from 'react-router-dom';
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

  function completeTask(task) {
    console.log('Complete this Task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks and it will update the
    // Iteration of the tasks in order to show the task updated
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log('delete this Task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log('adding new Task:', task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  function Table() {
    return (
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
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  }
  let taskTable;

  if (tasks.length > 0) {
    taskTable = <Table></Table>;
  } else {
    taskTable = (
      <div>
        <h1>There no task show</h1>
        <h2>Please, create new task</h2>
      </div>
    );
  }

  return (
    <div className='col-12'>
      <div className='card'>
        {/*Card Header (tiltle) */}
        <div className='card-header p-3'>
          <h5>Your Tasks:</h5>
        </div>
        <div
          className='card-body'
          data-mdb-perfect-scrollbar='true'
          style={{position: 'relative', height: '400px'}}
        >
          {taskTable}
          <TaskForm add={addTask}></TaskForm>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
