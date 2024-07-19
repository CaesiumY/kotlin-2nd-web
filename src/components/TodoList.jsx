import { useEffect } from "react";
import { useState } from "react";
import { getTodos } from "../api/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();

      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>title: {todo.title}</p>
            <p>userId: {todo.userId}</p>
            <p>completed: {todo.completed ? "true" : "false"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
