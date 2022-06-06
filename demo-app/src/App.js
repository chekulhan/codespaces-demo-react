import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Teacher from "./Teacher.js";
import ShoppingList from "./ShoppingList.js"
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>I am a React app developed in Github codespaces</h3>
      <p>My first <ShoppingList name="Jon" /></p>
      <p>My second <ShoppingList name="Mary" /></p>
      <Teacher name="David" />
      <Teacher name="Susan" />
      <div> <Board /></div>
    </div>
   
   

  );
}

export default App;
