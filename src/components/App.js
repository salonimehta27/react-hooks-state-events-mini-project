import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [list, setList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")


  const categories = CATEGORIES.filter(cat => cat !== "All")


  function handleAddNewTask(newTask) {

    setList([...list, newTask])
  }
  function handleDeleteButton(text) {
    setList(list.filter((item) => item.text !== text))
  }
  const itemsToDisplay = list.filter((task) => {

    if ("All" === selectedCategory) return true;
    return task.category === selectedCategory
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={categories} onTaskFormSubmit={handleAddNewTask} />
        <TaskList tasks={itemsToDisplay} onDelete={handleDeleteButton} />
      </div>
    </div>
  );
}

export default App;
