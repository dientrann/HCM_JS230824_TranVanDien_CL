import { useSelector } from "react-redux";
import { StoreType } from "./stores";
import './app.style.scss'
import { useState } from "react";

export default function App() {
  const taskStore = useSelector((store: StoreType) => store.taskStore)
  const [checked, setChecked] = useState(false)

  console.log("task", taskStore)
  // const handleCheck = (e) => {
  //   let isChecked = e.target.classList.contains('fa-solid')
  //   if (isChecked) {
  //     e.target.classList.remove('fa-solid')
  //     e.target.classList.add('fa-regular')
  //     let el = e.target.parentNode.parentNode.querySelector('h3')
  //     el.style.textDecoration = 'line-through'
  //   } else {
  //     e.target.classList.remove('fa-regular')
  //     e.target.classList.add('fa-solid')
  //     let el = e.target.parentNode.parentNode.querySelector('h3')
  //     el.style.textDecoration = 'none'

  //   }
  // }
  return (
   <div className="app">
     <div className="container">
      <div className="headerContainer">
        <h3>Todo List</h3>
        <p>Get things done, one item at a time.</p>
      </div>
      <div className="bodyContainer">
        <div className="listTask">
          {
            taskStore.data?.map((item, index) => {
              return <div className='itemTask' key={item.id}><h3>{item.name}</h3><div>
                <i onClick={() => {
                  setChecked(!checked)
                }} className={checked ? "fa-regular fa-square-check": "fa-solid fa-square-check"}></i>
                <i onClick={() => {
                }} className="fa-solid fa-trash-can"></i></div></div>
            })
          }
        </div>
        <div className='formInput'>
        <h5>Add to the todo list</h5>
        <form onSubmit={(e) => {
          // handleAddTodo(e)
        }}>
          <input type="text" placeholder='Enter your todo' name='todo' />
          <button type='submit'>Add Item</button>
        </form>
      </div>
      </div>
    </div>
   </div>
  );
}
