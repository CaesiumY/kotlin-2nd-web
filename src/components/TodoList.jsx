import { Button, Card, Group, Text } from "@mantine/core";

const TodoList = ({ todos, removeTodo, toggleTodo, getTodoDetail }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Card key={todo.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>
                {todo.id} : {todo.title}
              </Text>
              <Text size="sm" c="dimmed">
                {todo.completed ? "완료" : "미완료"}
              </Text>
            </Group>

            <Button.Group>
              <Button variant="light" onClick={() => getTodoDetail(todo.id)}>
                상세보기
              </Button>
              <Button
                variant="filled"
                onClick={() =>
                  toggleTodo({
                    ...todo,
                    completed: !todo.completed,
                  })
                }
              >
                완료
              </Button>
              <Button
                variant="outline"
                color="red"
                onClick={() => removeTodo(todo.id)}
              >
                삭제
              </Button>
            </Button.Group>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
