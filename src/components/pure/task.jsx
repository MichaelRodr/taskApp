import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class';
import {LEVELS} from '../../models/level.enum';

function TaskComponent({task}) {
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
          className='bi-toggle-on'
          style={{color: 'green', fontSize: '1.2rem'}}
        ></i>
      );
    } else {
      return (
        <i
          className='bi-toggle-off'
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
          className='bi-trash'
          style={{color: 'tomato', fontSize: '1.2rem'}}
        ></i>
      </td>
    </tr>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
