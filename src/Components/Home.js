import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../index.scss'

function Home() {
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
        <img src='https://www.eren.ch/cote/wp-content/uploads/sites/5/2020/04/bread_icon-icons.com_63160.png' alt='bread' id='bread-icon'/>
          {bread.name}
        </Link>
      </div>
    )
  })
  return (
     <>
      <img id='background' src='http://st2.depositphotos.com/1001599/11263/v/450/depositphotos_112633836-stock-illustration-background-of-bakery.jpg' alt='cartoon bakery background'/>

      <br />
        {display[0]}
        {display[1]}
        {display[2]}
        {display[3]}  
        {display[4]}
        {display[5]}
      </>
  );
}


export default Home;