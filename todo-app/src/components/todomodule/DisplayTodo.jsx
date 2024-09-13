import './displaytodo.css'
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { TASK_STATUS, VISIBILITY_STATUS } from '../../constants/todoConstants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllItems, showCompletedItems, showPendingItems } from './todoSlice';
export const DisplayTodo=()=>{
    const [todoList,setToDoList]=useState([])
    const dispatch=useDispatch()
    const {items,currentVisiblityStatus}=useSelector(state=>state.todo)
    const {SHOW_ALL,PENDING,COMPLETED}=VISIBILITY_STATUS;
    const {TASK_PENDING,TASK_COMPLETED}=TASK_STATUS;
    
    useEffect(()=>{  
     
        if(currentVisiblityStatus===PENDING){
          let pendingItems= items.filter((item)=>item.status===TASK_PENDING)
        console.log(pendingItems)
          setToDoList(pendingItems)
          
        }
        else if(currentVisiblityStatus===COMPLETED){
            let completedItems=items.filter((item)=>item.status===TASK_COMPLETED)
            setToDoList(completedItems)
            console.log(completedItems)
        }
        else{
            setToDoList(items)
        }
        // console.log(items)
    },[items,currentVisiblityStatus])


    const handleChange=(e)=>{
       const {value}=e.target
       if(value===COMPLETED){
          dispatch(showCompletedItems())
       }
       else if(value===PENDING){
        dispatch(showPendingItems())
       }
       else{
        dispatch(showAllItems())
       }
    }
    // const handleTaskStatusChange=()=>{
        
    // }
    return(
        <>
        <div className='status-dropdown'>
           <select onChange={handleChange}>
            <option value={SHOW_ALL}>Show All</option>
            <option value={PENDING}>Pending</option>
            <option value={COMPLETED}>Completed</option>
           </select>
        </div>
        {
            todoList.map((item,index)=>{
                return(
                    <div key={index} className="task-container">
                         <div className="task-list">
                            {
                                item.status===TASK_PENDING ? (
                                    <>
                                    <input type="checkbox"/>
                                    <p>{item.name}</p>
                                    </>
                                    
                                ):(
                                    <>
                                    <input type="checkbox"/>
                                    <p>{item.name}</p>
                                    </>
                                    
                                )

                               
                            }
                         </div>
                          {/* <div className="task-list">
                                <input type="checkbox"
                                /> */}
                              {/* <span><RiCheckboxBlankCircleLine/></span> */}
                              {/* <p>{item.name}</p>
                          </div> */}
                       
                   
                </div>
                )
            })
        }
       
        </>
    )
}


// {item.status===TASK_PENDING?
//     (
//         <div className="task-list">
//             <input type="checkbox"
//             />
//           <span><RiCheckboxBlankCircleLine/></span>
//           <p>{item.name}</p>
//       </div>
//     ):(
//         <div className="task-list">
//              <input type="checkbox"
//             checked={TASK_COMPLETED}
//             />
//           <span><RiCheckboxBlankCircleLine/></span>
//           <p>{item.name}</p>
//       </div>
//     )
         
//     }