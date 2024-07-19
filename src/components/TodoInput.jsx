import { Button, TextInput } from "@mantine/core";
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
    <form
      onSubmit={handleSubmit}
      style={{
        width: 480,
        margin: "auto",
      }}
    >
      <TextInput
        label="Title"
        placeholder="Enter your todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button variant="filled" type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default TodoInput;
