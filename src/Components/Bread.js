import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Bread() {
    const navigate = useNavigate()

    const [bread, setBread] = useState(null)

    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/breads/${id}`
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setBread(data)
        }

        fetchData()
    }, [id, URL])
    const deleteBread = async () => {
        const response = await fetch(URL, {
            method: 'DELETE'
        })
        if (response.status !== 204) console.log('error') // add error handling later
        navigate('/')
    }

    const display = bread && (
            <div id='bread-page-content'>
                <h1>{bread.name}</h1>
                <p>Has Gluten: {bread.hasGluten.toString()}</p>
                <img id='bread-page-bread-image' src={bread.image} alt={bread.name} height={300} />
                    <p>
                        {bread.description}
                    </p>
                <div>
                    <button onClick={() => navigate(`/bread/update/${id}`)}>Edit</button>
                    <button onClick={deleteBread}>Delete</button>
                </div>
            </div>
        )

    return (
        <div>
            <img id='bread-background' src='https://wallpaperaccess.com/full/5770540.jpg' alt='cartoon bread background'/>
            {display}
        </div>
    )
}

export default Bread