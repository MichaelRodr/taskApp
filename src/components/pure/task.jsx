import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class';
import {LEVELS} from '../../models/level.enum';
import '../../styles/task.scss';

function TaskComponent({task, complete, remove}) {
  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is goin to unmount`);
    };
  }, [task]);
  /**
   *
   * @returns Select badger depending the of type task level
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>{task.level}</span>
          </h6>
        );
        break;
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        );
        break;
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        );
        break;
    }
  }
  /**
   *
   * @returns
   */
  function taskIconCompleted() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className='bi-toggle-on p-2 task-actions'
          style={{color: 'green', fontSize: '1.2rem'}}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className='bi-toggle-off p-2 task-actions'
          style={{color: 'grey', fontSize: '1.2rem'}}
        ></i>
      );
    }
  }
  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/**Execution of function to return badge element */}
        <span>{taskLevelBadge()}</span>
      </td>
      <td className='align-middle'>
        {taskIconCompleted()}
        <i
          onClick={() => remove(task)}
          className='bi-trash task-actions'
          style={{color: 'tomato', fontSize: '1.2rem'}}
        ></i>
      </td>
    </tr>
  );
}
/**
 * ? Las PropsTypes deben ser definidas en el componente que las va a recibir
 * ?instanceOf indica a que clase pertenece
 * ? isRequired indica que es de caracter obligatorio
 */
TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
