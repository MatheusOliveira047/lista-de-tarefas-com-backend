import {FaPlus} from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import {useAlert} from 'react-alert' 

import './AddTasks.scss'

import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import ButtonLoading from './ButtonLoagind'

const AddTask = ({getTasks})=>{
  const [task,setTask] = useState('')
  const [loading,setLoading] = useState(false)

  const alert = useAlert()

  const onChange = (e)=>{
    setTask(e.target.value)
  }

  const handleTaskAddition = async()=>{
    setLoading(true)
    try {
      if(task.length === 0){
        setLoading(false)
        return alert.error('A tarefa precisa de uma descrição para ser adicionada.')
      }

      await axios.post('https://lista-de-tarefas-4vhh.onrender.com/api/tasks/create',{
        description:task,
        isCompleted:false,
      })

      await setTask('')
      setLoading(false)
      await alert.success('Tarefa adicionada com sucesso!!!')
      await getTasks()
    } catch (_error) {
      alert.error('Algo deu errado!!!!!!!!!!!!!')
      setLoading(false)
    }
  }

  return(
    <div className="add-task-container">
      <CustomInput 
        label='Adicionar Tarefa ...' 
        value={task} 
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />

      {
        loading 
        ? (
          <ButtonLoading size={40}/>
        )
        : (
          <CustomButton onClick={handleTaskAddition}>
            <FaPlus size={14} color="#fff"/>
          </CustomButton>
        ) 
      }
      
    </div>
  )
}


export default AddTask