import React,{ useEffect, useState } from 'react'
import movieData from './theData.json'
// import axios from 'axios';
import Home from './Home';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  // new key k_bwz76gkw
  // const getData = async () => {
  //   const response = await axios.get(
  //     "https://imdb-api.com/API/AdvancedSearch/k_hfsy49pt?groups=top_100"
  //   );
  //   setData(response.data);
   
  // };

  useEffect(() => {
   setData(movieData)
  }, [])
  
// if (!data.length) return <h3>Loading...</h3>

  return (
    <div className="App">
      <Home data={data}/>
    </div>
  );
}

export default App;
