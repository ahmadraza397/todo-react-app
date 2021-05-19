import React, {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false
    }
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const onDelete = (id) => {
    const copyArray = [...tasks];
    const updateTask = copyArray.filter(task => task.id !== id);
    setTasks(updateTask)
  }

  const toggleReminder = (id) => {
    const copyArray = [...tasks];
    const updateArray = copyArray.map(task => task.id === id ? {...task, reminder: !task.reminder} : task);
    setTasks(updateArray);
  } 

  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newArray = [...tasks, {id,...task}]
    setTasks(newArray)
  }

  return (
    <div className="container">
      <Header showForm={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {
        tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /> : "No Tasks Available"
      }
    </div>
  );
}

export default App;
