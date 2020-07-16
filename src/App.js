import React, { useState, useEffect } from "react";
import { API_URL } from "./constants"
import Header from "./components/Header"
import "./App.css";

function App() {
  // Declare state variables
  const [ dailyPhoto, setDailyphoto ] = useState();

  // Declare all other variables
  const currentDate = new Date();

  return (
    <div className="App">
      <Header 
      date = { currentDate.toDateString() } />
    </div>
  );
}

export default App;
