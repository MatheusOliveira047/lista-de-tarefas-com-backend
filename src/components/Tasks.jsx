import { useState,useEffect } from 'react'
import axios from 'axios'

import './Tasks.scss'

import TaskItem from './TaskItem'
import AddTask from './AddTasks'

const Tasks =()=>{
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const response = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks')

    console.log(response.data)
    setTasks(response.data)
  }

  useEffect(() => {
    getTasks()
  }, [])


  return(
    <div className='tasks-container'>
      <h2>Minhas Tarefas</h2>
      
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask/>
        <div className="tasks-list">
          {tasks.filter(task=> task.isCompleted === false).map(lastTask=>(
            <TaskItem task={lastTask}/>
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
            {tasks.filter(task=>task.isCompleted).map(completedTask=>(
            <TaskItem task={completedTask}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks