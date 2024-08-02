// components/TaskItem/TaskItem.js
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import TaskModal from '../TaskModal/TaskModal';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        ref={drag}
        className="task-item"
        style={{ opacity: isDragging ? 0.5 : 1 }}
        onClick={() => setModalOpen(true)}
      >
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <TaskModal
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        task={task}
      />
    </>
  );
};

export default TaskItem;
