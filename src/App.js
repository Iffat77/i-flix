import React,{ useEffect, useState } from 'react'
// import movieData from './theData.json'
import axios from 'axios';
import Home from './Home';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://imdb-api.com/API/AdvancedSearch/k_wj2yzd7d?groups=top_100"
      );
      
     setData(response.data.results)
    };
    getData()
  
  }, [])
  
// if (!data.length) return <h3>Loading...</h3>

  return (
    <div className="App">
      {data.length && <Home data={data} />}
    </div>
  );
}

export default App;
