import { useState } from "react";

//custom components
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';

import CustomForm from "./components1/CustomForm";
import EditForm from "./components1/EditForm";
import TaskList from "./components1/TaskList";
import ThemeToggle from "./components1/ThemeToggle";
import Header from "./components1/Header"
const initialState = [
  {
    userId: 1,
    id: 1,
    title: "Prepare breakfast",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Wash dishes",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "Week shopping",
    completed: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(initialState);
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [previousFocusEl, setPreviousFocusEl] = useState(false)
  
  //Add
  function addTask(task) {
    setTasks([...tasks, task]);
  }
  //delete
  function deleteTask(id){
    setTasks(prevTask => prevTask.filter(task => task.id !== id))
  }
  //toggle edit
  function toggleEdit(id){
setTasks(prevTask => prevTask.map(
  t=> (t.id === id)? {...t, completed: !t.completed}:t ))
  }
  //updDate function
  function updateTask(task){
    setTasks(prevTask => prevTask.map(
      t=> ((t.id === task.id)? {...t, title: task.title}:t )))
      closeEditMode()
      }
      //close edit 
      function closeEditMode(){
        setIsEditing(false)
        previousFocusEl.focus()
        //TODO: prev state focus
      }
      //enter edit mode
     const enterEditMode =(task)=>{
setEditedTask(task)
setIsEditing(true)
setPreviousFocusEl(document.activeElement)
     }

     //themeReducer     // reducer.js

 const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};
//initial state
const initState = {
  theme: localStorage.getItem('theme') || 'light',
};

  return (
    <div className="container">

     <div className="header">
      <Header />
     </div>
     
      <div className="edit-form">
         {isEditing && <EditForm editedTask={editedTask}
   closeEditMode={closeEditMode}
   updateTask={updateTask}  />}
      </div>
  <div className="custom-form">
  <CustomForm addTask={addTask} />
  </div>
     
   <div className="task-list">
      {tasks && <TaskList 
      tasks={tasks}
      deleteTask ={deleteTask}
      toggleEdit= {toggleEdit}
      enterEditMode={enterEditMode}
     
      />}
      </div>
      <div className="toggle-theme">
        <ThemeToggle themeReducer={themeReducer} initState={initState} />
      </div>
    </div>
  );
}

export default App;
