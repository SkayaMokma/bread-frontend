import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Bread() {
    const [bread, setBread] = useState({})

    const { id } = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            const URL = `${process.env.REACT_APP_BACKEND_URI}/breads/${id}`
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setBread(data)
        }

        fetchData()
    }, [id])

    return (
        <div>
            BREAD
        </div>
    )
}

export default Bread