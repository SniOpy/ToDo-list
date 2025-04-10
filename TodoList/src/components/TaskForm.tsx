import { useState } from 'react';
import React from 'react';
import { TaskType } from '../typescript/TaskType';

type TaskFormType = {
  handleAdd: (taskAdded: TaskType) => void;
  task: TaskType[];
  handleDelete: (idTask: number) => void;
};

export default function TaskForm({ handleAdd, task, handleDelete }: TaskFormType) {
  //! State
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  //! comportement
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = newTask;

    const taskToAdd = { id, name };
    handleAdd(taskToAdd);
    setNewTask('');
  };

  const onDelete = (id: number) => {
    handleDelete(id);
  };

  //! affichage
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={newTask}
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>

      <ul>
        {task.map((t) => {
          return (
            <li key={t.id}>
              {t.name} <button onClick={() => onDelete(t.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
