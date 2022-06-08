import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";
import logo from "./logo.svg";
interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "learn react",
      description: "learn react",
      complete: false,
    },
  ]);

  const AddANewTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, complete:false }]);
  }

  const DeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container text-white">
          <a className="text-white" href="/">
            <img src={logo} alt="logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4 ">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={AddANewTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={DeleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
