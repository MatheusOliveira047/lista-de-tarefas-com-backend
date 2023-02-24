import './AddTasks.scss'
import CustomInput from './CustomInput'
import { useState } from 'react'

const AddTask = ()=>{
  const [task,setTask] = useState('')

  const onChange = (e)=>{
    setTask(e.target.value)
  }

  return(
    <div className="add-task-container">
      <CustomInput 
        label='Adicionar Tarefa ...' 
        value={task} 
        onChange={onChange}
      />
    </div>
  )
}


export default AddTask