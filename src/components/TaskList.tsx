import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";


interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList = ({tasks, deleteTask}:Props) => {
  return (
    <>
    
        {tasks.map((task ) => (
          <div key={task.id}  className="col-md-4 pb-2">
            <TaskCard task = {task} deleteTask={deleteTask}/>
          </div>
        ))}
      
    </>
  );
};

export default TaskList;
