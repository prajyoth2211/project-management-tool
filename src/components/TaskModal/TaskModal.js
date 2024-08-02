// components/TaskModal/TaskModal.js
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { TaskContext } from '../../context/TaskContext';
import Comments from '../Comments/Comments';
import FileUploads from '../FileUploads/FileUploads';
import './TaskModal.css';

const TaskModal = ({ isOpen, closeModal, task }) => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [comments, setComments] = useState([]);
  const [files, setFiles] = useState([]);

  const handleSave = () => {
    const updatedTask = { ...task, title, description, status };
    dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    closeModal();
  };

  const addComment = (text) => {
    setComments([...comments, text]);
  };

  const uploadFile = (file) => {
    setFiles([...files, file]);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <h2>Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Cancel</button>
      
      <Comments taskId={task.id} comments={comments} addComment={addComment} />
      <FileUploads taskId={task.id} files={files} uploadFile={uploadFile} />
    </Modal>
  );
};

export default TaskModal;
