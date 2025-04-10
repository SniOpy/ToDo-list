function App() {
  return (
    <>
      <h1>Todo list - Typescript</h1>

      <form action="">
        <input type="text" placeholder="Ajouter une tâche" />
        <button>Ajouter</button>
      </form>

      <ul>
        <li>
          Faire à manger <button>X</button>
        </li>
        <li>
          Ranger ses affaires <button>X</button>
        </li>
        <li>
          Sortir le chien <button>X</button>
        </li>
        <li>
          Rendez-vous dentiste <button>X</button>
        </li>
        <li>
          Visiter les parents <button>X</button>
        </li>
      </ul>
    </>
  );
}

export default App;
