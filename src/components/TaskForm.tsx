
import { ChangeEvent, FormEvent, useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { Task } from '../interfaces/Task'

interface Props{
  addANewTask: (task: Task) => void
}
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
  title: '',
    description: '',
}
const TaskForm = ({addANewTask}:Props) => {
  
  const [task, setTask] = useState(initialState)

  const handleChange = ({target : {name, value}}: HandleInputChange ) => {
    setTask({
      ...task,
      [name]: value,
    })
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault() 
    addANewTask(task)
    setTask(initialState);
  }
  return (
   <>
      <div className=' card card-body bg-secondary text-dark mb-4'>
      <h1>Add task</h1>
      <form onSubmit={handleNewTask}>
        <input 
        type="text" 
        placeholder='write a title' 
        name="title" 
        className="form-control mb-3 rounded-0 shadow-none border-0" 
        onChange={handleChange}
        value={task.title}
        required
        />  
        <textarea 
        name="description" rows={2} 
        placeholder='write a description' 
        className="form-control mb-3 rounded-0 shadow-none border-0" 
        onChange={handleChange} 
        value={task.description}
        required 
        />  
      
      <button className='btn btn-primary'>
        Save
        <AiOutlinePlusCircle className='icon'/>
      </button>

      </form>
      </div>
   </>
  )
}

export default TaskForm