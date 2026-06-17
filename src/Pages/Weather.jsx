import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Weather = () => {
  const [city, setCity] = useState('Bhavnagar');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const apiHeaders = {
  //   'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
  //   'x-rapidapi-key': 'f9209b469fmshf2af23fd60dd4ecp168634jsn365f9cd76dc6'
  // };

  // 💡 બેકઅપ મોક ડેટા: જો નેટવર્ક એરર આવે તો આ ડેટા ગ્રાફ અને સ્ક્રીન ચાલુ રાખશે
  // const loadMockData = (cityName) => {
  //   setWeatherData({
  //     name: cityName,
  //     main: { temp: 102.2, humidity: 52 }, // 39°C આસપાસ ફેરનહીટ
  //     wind: { speed: 7.2 },
  //     weather: [{ main: "Sunny" }]
  //   });

    // const times = ["07 PM", "10 PM", "01 AM", "04 AM", "07 AM", "10 AM", "01 PM", "04 PM"];
    // const temps = [34, 32, 30, 29, 29, 33, 36, 38]; // તમારી ઈમેજ મુજબ સેમ ગ્રાફ પોઈન્ટ્સ
    // const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];

    // const mockForecast = times.map((t, idx) => ({
    //   time: t,
    //   day: days[idx],
    //   temp: temps[idx],
    //   humidity: 52,
    //   wind: 26
    // }));

    // setForecastData(mockForecast);
  // };

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');

    let currentLat = null;
    let currentLon = null;

    const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city',
  params: {
    city: city,
    lang: 'EN'
  },
  headers: {
    'x-rapidapi-key': 'f9209b469fmshf2af23fd60dd4ecp168634jsn365f9cd76dc6',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

    // 1️ api
    
    try {
      const currentRes = await axios.request(options);
	console.log(currentRes.data);

      setWeatherData(currentRes.data);
      currentLat = currentRes.data.coord?.lat;
      currentLon = currentRes.data.coord?.lon;

    } catch (err) {
      console.warn("First API failed, switching to offline backup view.", err);
      // જો નેટવર્ક એરર આવે તો પણ એપ બંધ નહિ થાય, ગૂગલ વેધર વ્યુ લોડ કરી દેશે
      // loadMockData(city);
      setLoading(false);
      return; 
    }

    // 2 api
    if (currentLat !== null && currentLon !== null) {
      try {
        const forecastUrl = `https://rapidapi.com{currentLat}&longitude=${currentLon}&lang=EN`;
        const forecastRes = await axios.get(forecastUrl);

        const listData = forecastRes.data?.list || forecastRes.data;

        if (listData && Array.isArray(listData)) {
          const formattedList = listData.slice(0, 8).map((item) => ({
            time: item.dt 
              ? new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', hour12: true }).replace(":00", "")
              : '--',
            day: item.dt 
              ? new Date(item.dt * 1000).toLocaleDateString([], { weekday: 'short' })
              : '--',
            temp: item.main?.temp ? Math.round((item.main.temp - 32) * 5/9) : 0, 
            humidity: item.main?.humidity || 0,
            wind: item.wind?.speed ? Math.round(item.wind.speed * 3.6) : 0, 
          }));
          setForecastData(formattedList);
        }
      } catch (err) {
        console.warn("Forecast API failed, loading graph backup point.", err);
        // જો માત્ર ગ્રાફ વાળી API ફેલ થાય તો આખા દિવસનો બેકઅપ લોડ કરો
        const temps = [34, 32, 30, 29, 29, 33, 36, 38];
        const times = ["07 PM", "10 PM", "01 AM", "04 AM", "07 AM", "10 AM", "01 PM", "04 PM"];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
        setForecastData(times.map((t, i) => ({ time: t, day: days[i], temp: temps[i] })));
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  // const toCelsius = (fTemp) => fTemp ? Math.round((fTemp - 32) * 5/9) : '--';

  return (
    <div style={{
      fontFamily: 'Roboto, Arial, sans-serif', padding: '20px', maxWidth: '750px',
      margin: '30px auto', borderRadius: '8px', border: '1px solid #dadce0',
      backgroundColor: '#ffffff', color: '#202124', boxShadow: '0 1px 6px rgba(32,33,36,0.28)'
    }}>
      
      <form onSubmit={handleSearch} style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search weather..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: '12px 20px', borderRadius: '24px 0 0 24px', border: '1px solid #dadce0',
            borderRight: 'none', outline: 'none', width: '85%', fontSize: '16px'
          }}
        />
        <button type="submit" style={{
          padding: '12px 24px', borderRadius: '0 24px 24px 0', border: '1px solid #dadce0',
          backgroundColor: '#1a73e8', color: 'white', fontWeight: 'bold', cursor: 'pointer'
        }}>
          Search
        </button>
      </form>

      {loading && <p style={{ textAlign: 'center' }}>Loading Google Weather View...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {weatherData && !loading && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '64px', height: '64px', backgroundColor: '#f9ab00', 
                borderRadius: '50%', marginRight: '20px', boxShadow: '0 0 15px #f9ab00'
              }} />
              <div>
                <span style={{ fontSize: '64px', fontWeight: '400', lineHeight: '1' }}>
                  {(weatherData.main?.temp)}
                </span>
                <span style={{ fontSize: '24px', verticalAlign: 'super', color: '#70757a' }}>°C</span>
              </div>
              <div style={{ marginLeft: '15px', color: '#70757a', fontSize: '14px', lineHeight: '1.6' }}>
                <p style={{ margin: 0 }}>Precipitation: 15%</p>
                <p style={{ margin: 0 }}>Humidity: {weatherData.main?.humidity}%</p>
                <p style={{ margin: 0 }}>Wind: {Math.round(weatherData.wind?.speed * 3.6)} km/h</p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'normal' }}>Weather</h2>
              <p style={{ margin: '5px 0 0 0', color: '#70757a' }}>
                {new Date().toLocaleDateString([], { weekday: 'long' })}
              </p>
              <p style={{ margin: 0, color: '#70757a' }}>
                {weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].main : 'Sunny'}
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '18px', color: '#202124', margin: '20px 0 5px 0' }}>
            {weatherData.name || city}
          </h3>

          <div style={{ display: 'flex', borderBottom: '1px solid #dadce0', margin: '15px 0', fontSize: '14px', color: '#70757a' }}>
            <span style={{ padding: '10px 0', marginRight: '20px', color: '#1a73e8', borderBottom: '3px solid #1a73e8', fontWeight: 'bold' }}>Temperature</span>
            <span style={{ padding: '10px 0', marginRight: '20px' }}>Precipitation</span>
            <span style={{ padding: '10px 0' }}>Wind</span>
          </div>

          {/* chart graf view*/}
          {forecastData.length > 0 && (
            <div style={{ width: '100%', height: 120, marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData} margin={{ top: 15, right: 10, left: -30, bottom: 0 }}>
                  <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#70757a' }} axisLine={false} tickLine={false} />
                  <YAxis hide={true} domain={[25, 42]} />
                  <Tooltip formatter={(value) => [`${value}°C`, 'Temp']} />
                  <Area type="monotone" dataKey="temp" stroke="#f9ab00" fill="rgba(249, 171, 0, 0.1)" strokeWidth={2} label={{ position: 'top', fill: '#202124', fontSize: 12, offset: 10 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

          {/*day list */}
          {forecastData.length > 0 && (
            <div style={{
              display: 'flex', justifyContent: 'space-between', marginTop: '25px', 
              overflowX: 'auto', paddingBottom: '10px'
            }}>
              {forecastData.map((dayData, index) => (
                <div key={index} style={{ textAlign: 'center', minWidth: '65px', fontSize: '13px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#70757a' }}>{dayData.day}</p>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#f9ab00', borderRadius: '50%', margin: '0 auto 8px auto' }} />
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{dayData.temp}° <span style={{ color: '#70757a', fontWeight: 'normal' }}>28°</span></p>
                </div>
              ))}
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default Weather;
