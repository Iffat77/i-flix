import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import Home from './Home';


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
  
  return (
    <div className="App">
      {data.length && <Home data={data} />}
    </div>
  );
}

export default App;
