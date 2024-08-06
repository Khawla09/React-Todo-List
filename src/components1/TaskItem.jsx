import React,{useState} from "react";
import styles from "../styling/TaskList.module.css"

function TaskItem({ item, deleteTask,toggleEdit, enterEditMode }) {
    const [isCheked, setIsChecked] = useState(item.completed)
const modifiers_container ={
  marginTop: '40px',
 display:'flex',
 justifyContent: 'space-between'

}
const listItem = {
  fontSize: "30px"
}
    function handleCheckboxChange(e){
     
        setIsChecked(!isCheked)
        toggleEdit(item.id)
    }
  return (
    <div >
      <li className={ isCheked ? styles.checked :''} style={listItem}>
      <div style={modifiers_container}>

        <div className="task-group">
            <input type="checkbox" checked={isCheked} onChange={handleCheckboxChange}
            className={styles.checkbox}
            name={item.title} id={item.id}
            />
            <label htmlFor="item.id" className={styles.label}>
                {item.title}
            </label>
        </div>
        <div btns-container>
          
          <button className="btn btn-edit" aria-label={`Update ${item.title} Task`}
            onClick={()=> enterEditMode(item)} 
            > <i class="fa-solid fa-pencil fa-xl"></i>
            </button>
         
            
            <button className="btn btn-delete" aria-label={`Delete ${item.title} Task`}
            onClick={()=> deleteTask(item.id)} disabled={!item.completed}><i class="fa-solid fa-x fa-xl"></i></button>
          
         
        </div>
        </div>
        </li>
    </div>
  );
}

export default TaskItem;
