import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

const Column = ({ status, tasks, moveTask, deleteTask }) => {
  const [, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, status),
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        margin: '10px',
        padding: '10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
      }}
    >
      <h3>{status}</h3>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default Column;