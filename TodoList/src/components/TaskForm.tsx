import { useState } from 'react';

export default function TaskForm({ handleAdd, task, handleDelete }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = newTask;

    const taskToAdd = { id, name };
    handleAdd(taskToAdd);
    setNewTask('');
  };

  const onDelete = (id) => {
    handleDelete(id);
  };
  return (
    <>
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
    </>
  );
}
