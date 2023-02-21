//https://fsc-task-manager-backend.herokuapp.com/tasks
import { useState, useEffect } from 'react';
import axios from 'axios';

import TaskItem from './components/TaskItem'

import './App.css';

function App() {

  const [tasks, setTasks] = useState([

  ])

  const handleCleanTasks = () => {
    setTasks()
  }

  const getTasks = async () => {
    const response = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks')

    console.log(response.data)
    setTasks(response.data)
  }

  useEffect(() => {


    getTasks()
  }, [])




  return (
    <>
      <h1>Lista de tarefas</h1>
      <ul>
        {
          tasks.map(task => (
            <li>{task.description}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
