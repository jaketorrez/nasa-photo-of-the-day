 // Importing state and effect hooks
 import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Declare state elements
  const [ mainPhoto, setMainPhoto ] = useState();


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
