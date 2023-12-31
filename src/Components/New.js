import { useState } from "react";
import { useNavigate } from "react-router-dom";

function New() {
    const navigate = useNavigate()

    const [breadInput, setBreadInput] = useState({
        name: '',
        hasGluten: true,
        image: '',
        description:''
    })

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
        const URL = `${process.env.REACT_APP_BACKEND_URI}/breads`
        const response = await fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(breadInput),
        })
        if (response.status !== 201) console.log('error!')
        navigate('/')
    }
 
    return (    
       <>
        <body>
            <img id='new-background' src='https://images.vexels.com/media/users/3/171115/raw/04d452cfdf59216bedc2281a6930b112-bakery-shop-flat-illustration.jpg' alt='cartoon oven background'></img>
        </body>
        <div id='new-page-content'>
            <form onSubmit={handleSubmit}>
                <h3>New</h3>
                <div>
                    <p>Please provide a name for the bread:</p>
                    <input onChange={handleChange} value={breadInput.name} name='name' placeholder='Name' required />
                </div>
                <br />
                <div>
                    <p>Please select if the bread has gluten:</p>
                    <input onChange={handleGlutenCheck} defaultChecked={breadInput.hasGluten} value={breadInput.hasGluten} name='hasGluten' type='checkbox' />
                </div>
                <div>
                    <p>Please provide an image of the bread:</p>
                    <input onChange={handleChange} value={breadInput.image} name='image' placeholder='Image' />
                </div>
                <br />
                <div>
                    <p>Please provide a description for the bread:</p>
                    <input onChange={handleChange} value={breadInput.description} name='description' placeholder='Description' />
                </div>
                <br />
                <input type='submit' />
            </form>
        </div>
        </>
    )
}

export default New