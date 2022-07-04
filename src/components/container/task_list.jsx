import React from 'react';
import {Task} from '../../models/task.class';
import {LEVELS} from '../../models/level.enum';
import TaskComponent from '../pure/task';

/* Es el componente padre de (TaskComponent)el cual pasa datos como props a sus componentes hijos (datos primitivo, objetos complejos y funciones)*/

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default description',
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = usetate(true);

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
    <div>
      <h1>Your Tasks:</h1>
      {/*Todo Aplicar un for/map para renderizar una lista*/}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
