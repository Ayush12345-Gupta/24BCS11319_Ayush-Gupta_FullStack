import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Add your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Submit</button>

      <ul style={{ listStyle: "none" }}>
        {todos.map((todo, index) => (
          <li key={index}> 
            {todo}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}