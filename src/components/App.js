import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
const TASKS = [
  { text: "Buy rice", category: "Food" },
  { text: "Build a todo app", category: "Code" },
  { text: "Go for a walk", category: "Misc" },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const tasksToDisplay = tasks.filter(
    (task) => selectedCategory === "All" || task.category === selectedCategory
  );

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
