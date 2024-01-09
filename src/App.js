import logo from './logo.svg';
import './App.css';
import TwitterLogin from 'react-twitter-auth'
import { useState } from 'react';
function App() {
  const [distance, setDistance] = useState(0)
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [mess, setMess] = useState("yes")
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      // setMess("Geolocation is not supported by this browser.")
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  }
  setInterval(() => {
  // console.log("geo", navigator.geolocation)
  getLocation()
  }, 2000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Distance {distance}</p>
        <p>LAT {lat}</p>
        <p>Long {long}</p>
        <p>{mess}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TwitterLogin loginUrl="http://localhost:1112/auth/twitter"
                    onFailure={()=> console.log('failed')} onSuccess={()=> console.log('success')}
                    credentials="same-origin"
                    requestTokenUrl="http://localhost:1112/auth/twitter"/>
      </header>
    </div>
  );
}

export default App;
