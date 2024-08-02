// components/TaskDetails/TaskDetails.js
import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import './TaskDetails.css';

const TaskDetails = ({ task, closeModal }) => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    const updatedTask = { ...task, title, description, status };
    dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    closeModal();
  };

  return (
    <div className="task-details">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default TaskDetails;
