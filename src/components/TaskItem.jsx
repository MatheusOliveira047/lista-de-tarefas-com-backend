import axios from 'axios'
import {useAlert} from 'react-alert' 
import { useState } from 'react'

import './TaskItem.scss'

import ButtonLoading from './ButtonLoagind'
import {AiFillDelete} from 'react-icons/ai'

const TaskItem = ({task,getTasks}) => {
  const [loading,setLoading] = useState(false)
  const alert = useAlert()


  const handleDeleteTask = async (id)=>{
    setLoading(true)
    try {
        await axios.delete(`https://lista-de-tarefas-4vhh.onrender.com/api/tasks/delete/${id}`)

        await getTasks()
        alert.success('Tarefa removida com sucesso !!!')
        setLoading(false)
      } catch (error) {
        setLoading(false)
        alert.error('ops ocorreu um erro, tente novamente mais tarde !!!')
      }
  }

  const handleCompleted =async (e)=>{
    try {

      await axios.patch(`https://lista-de-tarefas-4vhh.onrender.com/api/tasks/update/${task._id}`,{
        isCompleted: e.target.checked,
      })

      await getTasks()
      alert.success('Tarefa concluida!!!')

    } catch (error) {
      alert.error('ops ocorreu um erro, tente novamente mais tarde !!!')
    }
  }

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label className={
          task.isCompleted 
          ? 'checkbox-container-completed'
          : 'checkbox-container'
        }>
          <span>
            {task.description}
          </span>
          <input 
            type="checkbox" 
            defaultChecked={task.isCompleted}
            onChange={(e)=>handleCompleted(e)} 
          />
          <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'}></span>
        </label>
      </div>

      {
        loading 
        ?(
          <ButtonLoading size={30}/>
        )
        :(
          <div className="delete">
            <AiFillDelete size={18} color="#f83a3a" onClick={()=>handleDeleteTask(task._id)}/>
          </div>
        )

      }
      

    </div>
  )
}

export default TaskItem