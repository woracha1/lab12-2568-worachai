import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Card,
  Group,
  Checkbox,
  ActionIcon,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { LoremIpsum } from "lorem-ipsum";
import { randomId } from "@mantine/hooks";
import { v4 as uuidv4 } from "uuid";
interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  dueDate: Date | null;
}

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Mantine + TS",
      isDone: false,
      dueDate: new Date(),
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
      dueDate: new Date(),
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
      dueDate: new Date(),
    },
  ]);
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const handleAdd = () => {
    const newTask: Task = {
      id: uuidv4(),
      title: randomId(),
      description: lorem.generateWords(10),
      isDone: false,
      dueDate: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Delete task
  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // Toggle done
  const toggleDoneTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isDone: !t.isDone } : t))
    );
  };

  return (
    <Container size="sm" py="lg">
      <Stack align="center">
        <Title order={2}>Todo List</Title>
        <Text size="sm" c="dimmed">
          All : {tasks.length} | Done : {tasks.filter((t) => t.isDone).length}
        </Text>
        {/* เพิ่ม Task */}
        <Button onClick={handleAdd}>Add Task</Button>
        {/* แสดง Task Cards */}
        <Stack w="100%">
          {tasks.map((task) => (
            <Card withBorder shadow="sm" radius="md" mb="sm" key={task.id}>
              <Group justify="space-between" align="flex-start">
                <Stack>
                  <Text
                    fw={600}
                    td={task.isDone ? "line-through" : "none"}
                    size="lg"
                  >
                    {task.title}
                  </Text>

                  <Text size="sm" c="dimmed">
                    {task.description}
                  </Text>
                  {task.dueDate && (
                    <Text size="xs" c="gray">
                      Due: {task.dueDate.toLocaleDateString()}
                    </Text>
                  )}
                  {/* แสดง Date & Time */}
                  <Text size="xs" c="gray">
                    Done at:
                  </Text>
                </Stack>
                {/* แสดง Button Done & Button Delete */}
                <Group>
                  <Button
                    style={{
                      backgroundColor: "#71c32fda",
                      color: "#dce6e7ff",
                    }}
                    variant="light"
                    size="xs"
                    onClick={() => toggleDoneTask(task.id)}
                  >
                    Done
                  </Button>
                  <Button
                    color="chanadda"
                    variant="light"
                    size="xs"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </Group>
              </Group>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
