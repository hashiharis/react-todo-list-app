import './addtodo.css'
import { FaPlus } from "react-icons/fa";
import { DisplayTodo } from './DisplayTodo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from './todoSlice';
export const AddTodo=()=>{
    const [item,setItem]=useState("")

    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
          e.preventDefault();

          if(!item){
            alert("Please enter an item")
            return
          }
         dispatch(addTodoItem(item))
         setItem("")
        //  console.log(dispatch(addTodoItem(item)))
    }


    return(
        <div className="todo-enter-container">
            <form className='task-entry' onSubmit={handleSubmit}>
            <input type="text" value={item} placeholder="Add item" onChange={(e)=>setItem(e.target.value)}/>
            <button className="submitBtn" type="submit"><FaPlus size="20px"/></button>
            </form>
            <DisplayTodo/>
        </div>
    )

}