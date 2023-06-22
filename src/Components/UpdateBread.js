import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
<form onSubmit={handleSubmit}>
<input required onChange={handleChange} value={breadInput.name} name='name' placeholder='name' />
<input onChange={handleGlutenCheck} defaultChecked={breadInput.hasGluten} value={breadInput.hasGluten} name='hasGluten' type='checkbox' />
<input onChange={handleChange} value={breadInput.image} name='image' placeholder='image' />
<input type='submit' />
</form>
)

return (
<div>
{display}
</div>
)
}

export default UpdateBread