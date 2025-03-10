import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'

function App() {
  const [dark, setdark] = useState(true);
  const [currLocation, setCurrLocation] = useState()
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState(null)

  const toggleDarkMode = () => {
    setdark(!dark);
  };

  const fetchLocationData = async () => {
    try {
      // Fetch IP address
      const ipResponse = await fetch("https://api.ipify.org");
      const ipData = await ipResponse.text();
      const ipAddress = ipData;

      // Fetch location data using the IP address
      const url = `https://weatherapi-com.p.rapidapi.com/ip.json?q=${ipAddress}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      const locationResponse = await fetch(url, options);
      const locationData = await locationResponse.json();

      // Set the location data in state
      setCurrLocation(locationData.city);
    } catch (error) {
      console.error("Failed to fetch location data: ", error);
    }
  };
  // console.log("curr ip Location: ", currLocation);

  const fetchWeatherData = async (location) => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.error) {
        setError(data.error.message);
        // setWeatherData(null);
      } else {
        setWeatherData(data)
        setError(null);
      }

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };


  console.warn('some err ', error)

  useEffect(() => {
    fetchLocationData();
  }, []);

  useEffect(() => {
    if (currLocation) {
      fetchWeatherData(currLocation);
    }
  }, [currLocation]);

  console.log("weather data in app ", weatherData);



  return (
    <div className={dark ? 'dark' : ''}>

      <div className=' desk:w-[80rem] w-[65rem]  h-screen mx-auto overflow-hidden font-outfit '>
        <Navbar fetchWeatherData={fetchWeatherData} data={weatherData} error={error} darkmode={dark} toggleDarkMode={toggleDarkMode} />
        <Grid weatherData={weatherData} />
      </div>

    </div>
  )
}

export default App
