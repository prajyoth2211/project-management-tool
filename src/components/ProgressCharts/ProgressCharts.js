// components/ProgressCharts/ProgressCharts.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register required scales and elements
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ProgressCharts = ({ tasks = [] }) => {
  const taskCounts = {
    'To Do': 0,
    'In Progress': 0,
    'Done': 0,
  };

  tasks.forEach(task => {
    if (task.status in taskCounts) {
      taskCounts[task.status]++;
    }
  });

  const dataBar = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [{
      label: 'Task Count',
      data: [taskCounts['To Do'], taskCounts['In Progress'], taskCounts['Done']],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }],
  };

  const dataPie = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [{
      data: [taskCounts['To Do'], taskCounts['In Progress'], taskCounts['Done']],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }],
  };

  return (
    <div>
      <h2>Progress Charts</h2>
      <Bar data={dataBar} />
      <Pie data={dataPie} />
    </div>
  );
};

export default ProgressCharts;
