import React, { useState, useEffect } from "react";
import axios from "axios";
import { APOD_URL, API_KEY } from "./constants";
import Header from "./components/Header";
import DailyPhoto from "./components/DailyPhoto";
import "./styles/App.css";
import { DiscoverButton } from "./styles/Styles";

function App() {
  // Variables with state
  const [ imageData, setImageData ] = useState({});

  // Stateless constants
  const apodUrl = `${APOD_URL}?api_key=${API_KEY}`;
  const currentDate = new Date();

  // Fetch daily image data with axios
  const getImageData = async () => {
      try {
        const resp = await axios.get(apodUrl);
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
      <div className="content">
        <Header />

        <DailyPhoto 
        date = { currentDate.toDateString() }
        imageData={ imageData } />

          <DiscoverButton>
            Discover More!
            </DiscoverButton>
      </div>
    </div>
  );
}

export default App;
