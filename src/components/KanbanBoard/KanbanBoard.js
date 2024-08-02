// components/KanbanBoard/KanbanBoard.js
import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { columns } from '../../config/kanbanConfig';
import TaskItem from '../TaskItem/TaskItem';
import { useDrop } from 'react-dnd';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const { state, dispatch } = useContext(TaskContext);

  const moveTask = (id, status) => {
    const updatedTask = state.find(task => task.id === id);
    if (updatedTask) {
      dispatch({ type: 'UPDATE_TASK', payload: { ...updatedTask, status } });
    }
  };

  return (
    <div className="kanban-board">
      {columns.map(column => (
        <KanbanColumn key={column} status={column} moveTask={moveTask} tasks={state} />
      ))}
    </div>
  );
};

const KanbanColumn = ({ status, moveTask, tasks }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, status),
  });

  const columnTasks = tasks.filter(task => task.status === status);

  return (
    <div ref={drop} className="kanban-column">
      <h2>{status}</h2>
      <div className="kanban-tasks">
        {columnTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
