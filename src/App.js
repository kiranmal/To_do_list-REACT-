import './App.css';
import {Todos} from "./MyComponents/Todos";
import Header from "./MyComponents/Header";//here we do default export
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';
function App() {
  const onDelete =(todo)=>{
    console.log("I am ondelete of todo",todo);
    setTodos(todos.filter((e) =>{
      return e !== todo;
    }));
    // it is the way of deleting in react by use of setTodos
  }
  const [todos,setTodos] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno:3,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },
  ]);
  return (
   <>
      <Header title = "My Todo List" searchBar={false}/> 
      <Todos todos={todos} onDelete={onDelete}/>
      {/* without this you cannot import in any todos as prop */}
      <Footer/>
      </>
  );
}

export default App;
