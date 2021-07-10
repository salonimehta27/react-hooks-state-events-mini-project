import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDelete }) {

  const iterateOverTasks = tasks.map(c => <Task
    key={c.text}
    text={c.text}
    category={c.category}
    onDeleteTask={onDelete}
  />)

  return (
    <div className="tasks">
      {iterateOverTasks}
    </div>
  );
}

export default TaskList;
