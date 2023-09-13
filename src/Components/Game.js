import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Game(){
    const [breads, setBreads] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const URL = `${process.env.REACT_APP_BACKEND_URI}/breads`
        const response = await fetch(URL)
        const data = await response.json()
        setBreads(data)
      }
      fetchData()
    }, [])
  
    const display = breads.map(bread => {
      return (
        <div key={bread._id}>
          <Link to={`/bread/${bread._id}`} id='bread-link'>
          <img src='https://cdn4.iconfinder.com/data/icons/foods-and-drinks-piconic-2/512/bread-512.png' alt='bread' id='game-icon'/>
            {bread.name}
          </Link>
        </div>
      )
    })
    return (
       <>
        <img id='background' src='https://static.vecteezy.com/system/resources/previews/000/104/382/original/free-bakery-stand-vector.png' alt='cartoon bakery background'/>
        <br />
        <div id='game-div'>
          <div>
            <Link to='/memory-match' id='bread-link'>
            <img id='game-icon' src='https://cdn4.iconfinder.com/data/icons/foods-and-drinks-piconic-2/512/bread-512.png' alt='bread game icon'/>
            Memory Match
            </Link>
            </div>
          {display[1]}
          {display[2]}
          {display[3]}  
          {display[4]}
          {display[5]}
        </div>
        </>
    );
  }
  
  
  export default Game

