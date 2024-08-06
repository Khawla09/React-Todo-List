import React from "react";
import TaskItem from "./TaskItem";

//styles
// import styles from "./TaskList.module.css";
function TaskList({ tasks , deleteTask, toggleEdit, enterEditMode, isEditing}) {
  // console.log(tasks[0].title);
  return (
    // we use sort to make new tasks display first
    <ul>
      {/* className={styles.tasks} */}
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} item={task} deleteTask={deleteTask} toggleEdit={toggleEdit} 
          enterEditMode={enterEditMode} isEditing={isEditing}/>
        ))}
    </ul>
  );
}

export default TaskList;
