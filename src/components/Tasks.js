import React, {Component} from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
      <>
        {tasks.map( (task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ) )}
      </>
  )
}
Tasks.propTypes = {
}

export default Tasks;
