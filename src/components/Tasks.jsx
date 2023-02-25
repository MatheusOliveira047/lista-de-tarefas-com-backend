import { useState,useEffect } from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'

import './Tasks.scss'

import TaskItem from './TaskItem'
import AddTask from './AddTasks'

const Tasks =()=>{
  const [tasks, setTasks] = useState([])

  const alert = useAlert()

  const getTasks = async () => {
    try {
      const response = await axios.get('https://lista-de-tarefas-4vhh.onrender.com/api/tasks/')
      setTasks(response.data.tasks)
    } catch (_error) {
      alert.error("Não foi possível recuperar as tarefas.")
    }
  }

  useEffect(() => {
    getTasks()
  }, [])


  return(
    <div className='tasks-container'>
      <h2>Minhas Tarefas</h2>
      
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask getTasks={getTasks}/>
        <div className="tasks-list">
          {tasks.filter(task=> task.isCompleted === false).map(lastTask=>(
            <TaskItem getTasks={getTasks} task={lastTask}/>
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
            {tasks.filter(task=>task.isCompleted).map(completedTask=>(
            <TaskItem getTasks={getTasks} task={completedTask}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks