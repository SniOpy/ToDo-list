import { useState } from 'react';
import React from 'react';
import TaskForm from './components/TaskForm';
import { TaskType } from './typescript/TaskType';

function App() {
  //! State
  const [task, setTask] = useState<TaskType[]>([
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

  const handleAdd = (taskAdded: TaskType) => {
    const copyTask = [...task];

    copyTask.push(taskAdded);

    setTask(copyTask);
  };

  const handleDelete = (idTask: number) => {
    const copyTask = [...task];

    const copyTaskUpdated = copyTask.filter((task) => task.id !== idTask);

    setTask(copyTaskUpdated);
  };

  //! affichage
  return (
    <div>
      <h1>Todo list - Typescript</h1>

      <TaskForm handleAdd={handleAdd} task={task} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
