"use client";

import { useEffect, useState } from "react";
import Filter from "./_components/filter";
import Header from "./_components/header";
import TaskItem from "./_components/task-item";
import data from "./data/tasks.json";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggleContainer from "./_components/basics/theme-container";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleThemeChange() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const [newData, setData] = useState(data);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("created_at");

  const handleAddTask = (newData: any) => {
    setData({ tasks: [...data.tasks, newData], Charts: { ...data.Charts } });
  };

  if (!mounted) {
    return null;
  }
  
  const handleEditTask = (id: number, updatedTask: { [key: string]: any }) => {
    setData((prevData) => ({
      ...prevData,
      tasks: prevData.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    }));
  };

  const handleDeleteTask = (taskId: number) => {
    const deleteTask = data.tasks.filter((task) => task.id !== taskId);
    setData({ ...data, tasks: deleteTask });
  };

  const filteredTasks = newData.tasks
    .filter((newData) => {
      const matchesStatus =
        filter === "all" ||
        (filter === "pending" && newData.status === "Pendente") ||
        (filter === "in-progress" && newData.status === "Em progresso") ||
        (filter === "completed" && newData.status === "Concluída");

      const matchesSearch =
        searchTerm === "" ||
        newData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        newData.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "created_at") {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (sortOrder === "completed_at") {
        return (
          new Date(b.completed_at || 0).getTime() -
          new Date(a.completed_at || 0).getTime()
        );
      }
      return 0;
    });

  return (
    <main>
      <Header onAddTask={handleAddTask} />

      <ThemeToggleContainer>
        {resolvedTheme === "dark" ? (
          <SunIcon size={24} onClick={handleThemeChange} />
        ) : (
          <MoonIcon size={24} onClick={handleThemeChange} />
        )}
      </ThemeToggleContainer>

      <section className="container mx-auto px-5">
        <div className="w-full">
          <Filter
            setFilter={setFilter}
            setSearchTerm={setSearchTerm}
            setSortOrder={setSortOrder}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              props={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
