import { useState, useEffect } from "react";

function App() {
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
        <p>{bread.name}</p>
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

export default App;