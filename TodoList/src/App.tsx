import { useState } from 'react';
import TaskForm from './components/TaskForm';

function App() {
  //! State
  const [task, setTask] = useState([
    {
      id: 1,
      name: 'Faire la vaisselle',
    },
    {
      id: 2,
      name: 'Ranger le linge',
    },
    {
      id: 3,
      name: 'Se brosser les dents',
    },
  ]);
  //! comportements

  const handleAdd = (taskAdded) => {
    const copyTask = [...task];

    copyTask.push(taskAdded);

    setTask(copyTask);
  };

  const handleDelete = (idTask) => {
    const copyTask = [...task];

    const copyTaskUpdated = copyTask.filter((task) => task.id !== idTask);

    setTask(copyTaskUpdated);
  };

  //! affichage
  return (
    <>
      <h1>Todo list - Typescript</h1>

      <TaskForm handleAdd={handleAdd} task={task} handleDelete={handleDelete} />
    </>
  );
}

export default App;
