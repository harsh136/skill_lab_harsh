import React from 'react'
import Timer from './components/Timer'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = React.useState([]);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Timer />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      <AddTask onAdd={handleAddTask} />
    </>
  )
}

export default App;