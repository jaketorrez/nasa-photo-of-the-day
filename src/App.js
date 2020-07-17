import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "./constants";
import Header from "./components/Header";
import DailyPhoto from "./components/DailyPhoto";
import "./styles/Styles";

function App() {
  // Constant stateless variables
  const url = `${API_URL}?api_key=${API_KEY}`;
  const currentDate = new Date();

  // Variables with state
  const [ imageData, setImageData ] = useState({});

  // Fetch daily image data with axios
    const getImageData = () => {
      axios.get(url).then(resp => {
        setImageData(resp.data);
      }).catch(err => {
        console.log(err);
      });
    }
    useEffect(() => {
      getImageData();
    }, []);

  return (
    <div className="App">
      <div className="top-content">
        <Header />
        <DailyPhoto 
        date = { currentDate.toDateString() }
        imageData={ imageData } />
      </div>
    </div>
  );
}

export default App;
