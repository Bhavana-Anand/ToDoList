import React, { useState } from 'react';
function TodoList() {
const [tasks, setTasks] = useState([]);
const [newTaskName, setNewTaskName] = useState('');
const [newTaskDescription, setNewTaskDescription] = useState('');
const handleAddTask = () => {
 if (newTaskName.trim() !== '') {
 const newTask = {
 name: newTaskName,
 description: newTaskDescription
 };
 setTasks([...tasks, newTask]);
 setNewTaskName('');
 setNewTaskDescription('');
 }
 };
 const handleRemoveTask = (index) => {
 const updatedTasks = [...tasks];
 updatedTasks.splice(index, 1);
 setTasks(updatedTasks);
 };

 return (
    <div>
    <h1>Daily Todo List</h1>
    Task Name:<input
    type="text"
    placeholder="Enter task name"
    value={newTaskName}
    onChange={(e) => setNewTaskName(e.target.value)}
    /><br></br>
    <br></br>
    Task Description:<textarea
    type="text"
    placeholder="Enter task description"
    value={newTaskDescription}
    onChange={(e) => setNewTaskDescription(e.target.value)} /><br>
    </br><br></br>
    <button onClick={handleAddTask}>Add Task</button>
    <ul>
    {tasks.map((task, index) => (
    <li key={index}>
    <strong>{task.name}</strong> - {task.description}<br></br>
    <button onClick={() =>
   handleRemoveTask(index)}>Remove</button>
    </li>
    ))}
    </ul>
    </div>
    );
   }
   export default TodoList;
   