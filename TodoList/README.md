# 🇫🇷 Todo List React / TypeScript

📝 Todo list React / TypeScript
🚀 Comment utiliser

    Cloner le dépôt :
    git clone <url-du-repo>

    Installer les dépendances :
    npm install

    Lancer l'application :
    npm start

🎯 Objectif

Créer une todo list en React avec TypeScript, permettant d’ajouter et de supprimer des tâches dynamiquement.
🧠 Fonctionnement global :

    L'application gère un state contenant une liste de tâches typée TaskType[].

    Le composant enfant TaskForm gère l’ajout de nouvelles tâches et l'affichage de la liste.

    L'utilisateur peut :

        Ajouter une tâche via un champ texte + bouton

        Supprimer une tâche via un bouton "X"

🔧 Détails techniques
Dans App.tsx :

    useState initialise une liste de 3 tâches par défaut.

    handleAdd ajoute une tâche.

    handleDelete supprime une tâche par id.

    Le composant TaskForm reçoit :

        handleAdd

        handleDelete

        task (liste des tâches)

Dans TaskForm.tsx :

    useState gère l’état du champ texte pour une nouvelle tâche (newTask).

    handleChange met à jour ce champ.

    handleSubmit :

        Crée une tâche avec un id unique

        Appelle handleAdd pour l’ajouter à la liste

    onDelete appelle handleDelete avec l’id d’une tâche.

    Le composant affiche :

        Un formulaire d’ajout

        Une liste de tâches avec bouton de suppression

📁 Typage

Le type TaskType :

{
id: number;
name: string;
}

Le typage TypeScript est appliqué aux props et states pour renforcer la sécurité et la clarté du code.

# 🇬🇧 Todo List React / TypeScript

📝 Todo list React / TypeScript
🚀 How to use

    Clone the repository:
    git clone <repo-url>

    Install dependencies:
    npm install

    Start the app:
    npm start

🎯 Goal

Create a todo list app using React and TypeScript, with dynamic task creation and deletion.
🧠 How it works:

    The app manages a state containing a list of tasks (TaskType[]).

    A child component TaskForm handles:

        The task input form

        Displaying the list

    The user can:

        Add a task with a text field and button

        Delete a task using a small "X" button

🔧 Technical Details
In App.tsx:

    useState initializes the list with 3 default tasks.

    handleAdd adds a new task.

    handleDelete removes a task by id.

    The TaskForm component receives:

        handleAdd

        handleDelete

        task (task list)

In TaskForm.tsx:

    useState manages the text field state (newTask).

    handleChange updates the input field.

    handleSubmit:

        Creates a task with a unique id

        Calls handleAdd to add it to the list

    onDelete calls handleDelete with the task id.

    The component renders:

        A form to add new tasks

        A list of tasks with delete buttons

📁 Typing

The TaskType:

{
id: number;
name: string;
}

TypeScript typing is used throughout the code to secure props and state, ensuring reliability and clarity.
