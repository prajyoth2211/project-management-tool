// App.js
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import TaskForm from './components/TaskForm/TaskForm';
import ProgressCharts from './components/ProgressCharts/ProgressCharts';
import Notifications from './components/Notifications/Notifications';
import './styles/global.css';

const App = () => {
  return (
    <TaskProvider>
      <Notifications />
      <TaskForm />
      <KanbanBoard />
      <ProgressCharts />
    </TaskProvider>
  );
};

export default App;
