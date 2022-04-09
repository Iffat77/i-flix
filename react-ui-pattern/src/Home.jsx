import { useEffect, useState } from 'react';
import Banner from "./Banner.jsx";
import './banner.css';

export default function Home({ data }) {
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [drama, setDrama] = useState([]);
  const [thriller, setThriller] = useState([]);

  useEffect(() => {
    let actionData = data.filter((movie) => movie.genres.includes("Action"))
    let comedyData = data.filter((movie) => movie.genres.includes("Comedy"))
    let dramaData = data.filter((movie) => movie.genres.includes("Drama"))
    let thrillerData = data.filter((movie) => movie.genres.includes("Thriller"))

    setAction(actionData)
    setComedy(comedyData)
    setDrama(dramaData)
    setThriller(thrillerData)
  }, [data])
  
  return (
    <div>
      <h1 className='title-main'>Hello</h1>
      <div className='banner-container'>
        <div className="action">
          <h1>Action</h1>
          {action.map((movie) => (
            <Banner movie={movie}/>
            ))}
        </div>
        <div className="comedy">
          <h1>Comedy</h1>
          {comedy.map((movie) => (
            <Banner movie={movie}/>
          ))}
        </div>
        <div className="drama">
          <h1>Drama</h1>
          {drama.map((movie) => (
            <Banner movie={movie}/>
          ))}
        </div>
        <div className="thriller">
          <h1>Thriller</h1>
          {thriller.map((movie) => (
            <Banner movie={movie}/>
          ))}
        </div>
      </div>
    </div>

  )
} 
