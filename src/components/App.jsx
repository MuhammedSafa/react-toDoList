import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [myItem, setMyItem] = useState("");
  const [myItems, setMyItems] = useState([]);



  function handleChange(event) {
    const newValue = event.target.value;
    setMyItem(newValue);
  }

  function addItem() {
    if (myItem) {
      setMyItems(prevValue => {
        return [...prevValue, myItem];
      });
      setMyItem("");
    }
  }

  function deleteItem(id) {

    setMyItems(prevValues => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={myItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {myItems.map((todoItem, index) => (
            <ToDoList key={index} id={index} item={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
