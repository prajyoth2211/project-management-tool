// context/TaskContext.js
import React, { createContext, useReducer, useState } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map(task => task.id === action.payload.id ? action.payload : task);
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, []);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
    setTimeout(() => {
      setNotifications(notifications.filter((_, index) => index !== 0));
    }, 3000);
  };

  return (
    <TaskContext.Provider value={{ state, dispatch, addNotification, notifications }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
