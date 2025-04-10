import { useState } from 'react';

function App() {
  //! State
  const [tasks, setTasks] = useState([{ name: 'Faire à manger' }, { name: 'Ranger le linge' }]);

  //! comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const handleChange = (event) => {
    setTasks(event.target.value);
  };
  //! affichage
  return (
    <>
      <h1>Todo list - Typescript</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ajouter une tâche" onChange={handleChange} />
        <button>Ajouter</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.name}>
              {task.name} <button>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
