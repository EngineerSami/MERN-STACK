import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { description: newTask, completed: false }]);
    setNewTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };


  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <div className="task-input">
        <input type="text" placeholder="Enter a new task..." value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list" >
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleCompletion(index)}/>
            <span>{task.description}</span>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
