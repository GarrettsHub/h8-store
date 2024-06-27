import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'

const Single = () => {
    // useState to hold the product data
    const [item, setItem] = useState(null);
    
    const { path, id } = useParams();
    
    const url = `http://localhost:3005/api/${path}/${id}`

    // useEffect to fetch product data when the component mounts
    useEffect(() => {
        const fetchItem = async () => {
            try {
                // request to the api to get product data
                const response = await axios.get(url);
                // Update the state with the fetched data
                setItem(response.data);
            } catch (error) {
                console.error('Error fetching the product data:', error);
            }
        }
        // Call the function to fetch the product data
        fetchItem()
    }, [url]); // Dependency array ensures the effect runs when the URL changes

    // Show a loading message while the data is being fetched
    if (!item) {
        return <SpinnerLoader />
    }

    return (
        <main className="container my-5" id="singleMain">
            <div className="row">
                <div className="col-md-6">
                    <img src={`/images/${item.image_url}`} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{item.name}</h1>
                    <h3 className="text-danger">${item.price}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        </main>
    )
}

export default Single
