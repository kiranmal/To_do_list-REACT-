import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  // on delete and to do are the parts of the props we are directly using it is called desturcturing
  return (
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" 
    onClick={() =>{onDelete(todo)}}>Delete
    </button>
    
    {/*When we call the onDlete as it is is called render nad onDlete()is called function call  */}
    </div>
  )
}



