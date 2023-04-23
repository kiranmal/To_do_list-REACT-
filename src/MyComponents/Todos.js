import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>{
      props.todos.length===0?"No Todos to display":
      props.todos.map((todo)=>{
      return<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
    }{/* my-3 is the margin and text center */}
     </div>
  )
}
    //we should send some unique key in case here we send sno
      {/* on click is js to do delete operation */}
      {/* this is a for loop that return a array type is higher level of js in use here by use of this help in <div className="map">return all the list</div> */}
     
   


