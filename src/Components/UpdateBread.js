import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function UpdateBread() {
const navigate = useNavigate()

const [breadInput, setBreadInput] = useState(null)

const { id } = useParams()
const URL = `${process.env.REACT_APP_BACKEND_URI}/breads/${id}`

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setBreadInput(data)
    }

    fetchData()
}, [id, URL])

const handleChange = (e) => {
const value = e.target.value;
setBreadInput({
    ...breadInput,
    [e.target.name]: value
    });
}

const handleGlutenCheck = (e) => {
    const checked = e.target.checked
    setBreadInput({
        ...breadInput,
        [e.target.name]: checked
    });
}

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(breadInput)
        })
        if (response.status !== 204) console.log('error!') // add error handling later
        navigate(`/bread/${id}`)
    }

const display = breadInput && (
  <>
  <div id='edit-page-content'>
    <form id='update-form' onSubmit={handleSubmit}>
      <h3>Edit</h3>
      <div>
      <p>Please provide a name for the bread:</p>
          <input required onChange={handleChange} value={breadInput.name} name='name' placeholder='name' />
      </div>
      <ul></ul>
      <div>
          <p>Please select if the bread has gluten:</p>
          <input onChange={handleGlutenCheck} defaultChecked={breadInput.hasGluten} value={breadInput.hasGluten} name='hasGluten' type='checkbox'/>
          </div>
          <ul></ul>
      <div>
      <p>Please provide an image of the bread:</p>
          <input onChange={handleChange} value={breadInput.image} name='image' placeholder='image' />
          </div>
          <ul></ul>
          <div>
          <p>Please provide a description for the bread:</p>
          <input required onChange={handleChange} value={breadInput.description} name='description' placeholder='Description' />
          </div>
          <ul></ul>
          <div>
            <input type='submit'/>
          
          </div>
        </form>
      </div>
    </>
  );

    return (
        <div>
          <img id='edit-background' src='https://4.bp.blogspot.com/-Ox8Ia8Lt37w/XLj3Phd7dhI/AAAAAAAACew/PrmU0JNICts-pELta5_QqsTWD_hWDzF8gCK4BGAYYCw/s1600/bakery_interior_BG.png' alt='cartoon bakery background'></img>
            {display}
        </div>
    )
}

export default UpdateBread