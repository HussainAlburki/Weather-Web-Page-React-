import React, { useState } from "react";
import Weather from "./components/Weather";
import WeatherReport from "./components/WeatherReport";
import './index.css'; // import the CSS file

function App() {
  const [location, setLocation] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      
      <form>
        <label htmlFor="location">Enter Location: </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
      </form>
      {location && (
        <>
          <Weather location={location} />
          <WeatherReport location={location} />
        </>
      )}
    </div>
  );
}

export default App;
