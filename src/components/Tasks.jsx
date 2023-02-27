import { useState,useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'

import './Tasks.scss'

import TaskItem from './TaskItem'
import AddTask from './AddTasks'

const Tasks =()=>{
  const [tasks, setTasks] = useState([])

  const alert = useAlert()

  const getTasks = useCallback(async () => {
    try {
      const response = await axios.get('https://lista-de-tarefas-4vhh.onrender.com/api/tasks/')
      setTasks(response.data.tasks)
    } catch (_error) {
      alert.error('Não foi possível realizar a operação')
    }
  },[alert])

  const lastTasks = useMemo(()=>{
    return tasks.filter(task => task.isCompleted === false)
  }, [tasks])

  const completedTasks = useMemo(()=>{
    return tasks.filter(task => task.isCompleted === true)
  },[tasks])

  useEffect(() => {
    getTasks()
  },[getTasks])


  return(
    <div className='tasks-container'>
      <h2>Minhas Tarefas</h2>
      
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask getTasks={getTasks}/>
        <div className="tasks-list">
          {lastTasks
          .map(lastTask=>(<TaskItem key={lastTask._id} getTasks={getTasks} task={lastTask}/>))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
            {completedTasks.map(completedTask=>(
            <TaskItem key={completedTask._id} getTasks={getTasks} task={completedTask}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks