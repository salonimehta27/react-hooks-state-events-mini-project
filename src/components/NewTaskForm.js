import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setTextDetails] = useState("");
  const [category, setCategory] = useState("Code")

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text: text, category: category })
    setTextDetails("")
    setCategory("Code")
  }

  const renderCategoryList = categories.map(c => { return (<option key={c}>{c}</option>) })
  // console.log(categories.map(c => { return (<option key={c}>{c}</option>) }))
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text"
          name="text"
          value={text}
          onChange={(e) => setTextDetails(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          {renderCategoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
