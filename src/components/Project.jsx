import React from 'react';
import Column from './Column';

const Project = ({ name, initialTasks, onMoveTask, onDeleteTask }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{name}</h2>
      <div style={{ display: 'flex' }}>
        <Column
          status="To Do"
          tasks={initialTasks.filter((t) => t.status === 'To Do')}
          moveTask={onMoveTask}
          deleteTask={onDeleteTask}
        />
        <Column
          status="In Progress"
          tasks={initialTasks.filter((t) => t.status === 'In Progress')}
          moveTask={onMoveTask}
          deleteTask={onDeleteTask}
        />
        <Column
          status="Done"
          tasks={initialTasks.filter((t) => t.status === 'Done')}
          moveTask={onMoveTask}
          deleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
};

export default Project;