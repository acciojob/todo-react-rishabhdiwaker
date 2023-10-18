import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([ ]);
   
  console.log("todo" ,todo)
  function implementAddTodo(e){
    e.preventDefault();
    setTodoList([...todoList, todo])
    setTodo("")
  }

  function handleDelete(index){
    setTodoList(todoList.filter((value,position) => position != index))
  }


  return (
    <div>
      <form onSubmit={implementAddTodo}>
        <input type="text" placeholder="Enter task" onChange={(e) => setTodo (e.target.value)} value={todo}/>
        <button type="submit">Add Todo</button>
      </form>

      {
        todoList.map((item ,index)=> (
          <ul>
            <div>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </ul>
        ))
      }
    </div>
  )
}

export default App
