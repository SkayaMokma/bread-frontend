import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.css';


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
          {bread.name}
        </Link>
      </div>
    )
  })

  // has key for index name ({display[i]}) but needs key for image and description
  // add specific size for image in the card
  return (
    <>

    <h3>Home</h3>
    <br />
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{display[0]}</Card.Title>
          <Card.Text>
          Dense, slightly sweet rye bread made with sourdough starter and coarsely ground rye.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{display[1]}</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{display[2]}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </>
  );
}


export default Home;