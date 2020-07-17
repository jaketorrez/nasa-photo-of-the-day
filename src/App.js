import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "./constants";
import Header from "./components/Header";
import DailyPhoto from "./components/DailyPhoto";
import { GridWrapper, Button } from "./styles/Styles";

function App() {
  // Stateless constants
  const url = `${API_URL}?api_key=${API_KEY}`;
  const currentDate = new Date();

  // Variables with state
  const [ imageData, setImageData ] = useState({});

  // Fetch daily image data with axios
    const getImageData = async () => {
      try {
        const resp = await axios.get(url);
        setImageData(resp.data);
      } catch(err) {
        console.log(err);
      }
    }

    // Invoke getImageData only once, after first render
    useEffect(() => {
      getImageData();
    }, []);

  return (
    <div className="App">
      <GridWrapper className="top-content">
        <Header />
        <DailyPhoto 
        date = { currentDate.toDateString() }
        imageData={ imageData } />
        <div className="btn-container">
          <Button>Discover More!</Button>
        </div>
        <hr></hr>
      </GridWrapper>
    </div>
  );
}

export default App;
