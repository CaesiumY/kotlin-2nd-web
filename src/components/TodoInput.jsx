import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTodo({
      // title: title,
      title,
      userId: 1,
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInput;
