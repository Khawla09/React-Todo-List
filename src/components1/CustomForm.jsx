import React, { useState } from "react";
import styles from "../styling/TaskList.module.css"
function CustomForm({ addTask }) {
  const [title, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTodo);
    //when we submit it goes back to empty
    setTask("");
    // console.log(e);
  };
  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <div className="wrapper" style={styles}>
         <div className="addTodo">
         <input
          value={title}
          onInput={(e) => setTask(e.target.value)} 
          type="text" id="task"  className="input"  required
          autoFocus  maxLength={80}  placeholder="Enter New Task!"
        />
        <button
          className="btn"
          style={{ padding: "10px" }}
          aria-label="Add Task"
          type="submit"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
         </div>
        <div >
        <label htmlFor="task" className="label">
          Enter a Chore
        </label>
        </div>
      
      </div>
     
    </form>
  );
}

export default CustomForm;
