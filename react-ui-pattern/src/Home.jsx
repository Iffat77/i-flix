import { useEffect, useState } from 'react';
import Banner from "./Banner.jsx";
import './Banner.css';
import Modal from './Modal.jsx';

export default function Home({ data }) {
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [drama, setDrama] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

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
      {showModal ? <Modal movie={currentMovie} setShowModal={setShowModal}/> : null}

      <h1 className='title-main'>i-Flix</h1>
      <div className='banner-container'>
        
        <h1 className='action-title'>Action</h1>
          <div className="action">
          {action.map((movie) => (
            <Banner setShowModal={setShowModal} setCurrentMovie={setCurrentMovie} movie={movie} key={movie.id} />
          ))}
      </div>
        <h1 className='comedy-title'>Comedy</h1>
          <div className="comedy"> 
          {comedy.map((movie) => (
            <Banner setShowModal={setShowModal} setCurrentMovie={setCurrentMovie} movie={movie} key={movie.id} />
          ))} 
        </div>
        <h1 className='drama-title'>Drama</h1>
        <div className="drama">
          {drama.map((movie) => (
            <Banner setShowModal={setShowModal} setCurrentMovie={setCurrentMovie} movie={movie} key={movie.id}/>
          ))}
        </div>
        <h1 className='thriller-title'>Thriller</h1>
        <div className="thriller">  
          {thriller.map((movie) => (
            <Banner setShowModal={setShowModal} setCurrentMovie={setCurrentMovie} movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </div>

  )
} 
