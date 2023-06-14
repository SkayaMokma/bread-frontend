import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

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
        <Link to={`/bread/${bread._id}`}>
        <p>{bread.name}</p>
        </Link>
      </div>
    )
  })

  return (
    <div>
      <h1>BreadCRUD</h1>
      {display}
    </div>
  );
}

export default Home;