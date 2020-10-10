import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  //when the app loads we nees to listed the databse
  useEffect(() => {
    //this code here... fire when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().task));
      });
  }, []);

  const [input, setInput] = useState("");
  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();

    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input]);
    setInput(""); //clear up the input after clicking add tod button
  };

  return (
    <div className="App">
      <h2>Hello Clever Programmers </h2>
      <form>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
