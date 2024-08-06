import React, { useEffect, useState } from "react";

 import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
function EditForm({ editedTask, updateTask, closeEditMode }) {
   

  const [updatedTask, setUpdatedTask] = useState(editedTask.title);
useEffect(()=>{
const closeModalIfEscaped =(e)=>{
e.key === "Escape" && closeEditMode()
}
window.addEventListener('keydown', closeModalIfEscaped)

return ()=>{
    window.removeEventListener('keydown', closeModalIfEscaped)
}},[closeEditMode])
//
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    updateTask({...editedTask, title: updatedTask})
    // console.log(e);
  };
  return (
    <div role="dialog" aria-labelledby="editTask"
    onClick={(e)=>{e.target === e.currentTarget && closeEditMode()}}
    >
    <form className="edit-form" onSubmit={handleFormSubmit}>
      <div className="wrapper">
      
        <input
          value={updatedTask}
          onInput={(e) => setUpdatedTask(e.target.value)}
          type="text"
          id="editTask"
          className="input"
          required
          autoFocus
          maxLength={80}
          placeholder="Update your Task!"
        />
           <label htmlFor="editTask" className="label">
          Edit Task
        </label>
        <button
          className="btn"
          style={{ padding: "20px", color: "white" }}
          aria-label={`Confirm edited task to now read ${updatedTask}`}
          type="submit"
        >
       <i class="fa-solid fa-check fa-2xl"></i>
        </button>
     
      </div>
      {/* emmer */}
    </form>
    </div>
  );
}
{/* <CheckIcon strokeWidth={2} height={24} width={24} /> */}

export default EditForm;
