import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState(null)

    useEffect(() => {
        // Fetch products from the API
        axios.get('http://localhost:3005/api/product')
            .then(response => {
                setProducts(response.data)
                // Select a random product
                const randomIndex = Math.floor(Math.random() * response.data.length)
                setFeaturedProduct(response.data[randomIndex])
            })
            .catch(error => {
                console.error('Error fetching products:', error)
            })
    }, [])

    return (
        <main className="main" id="homeMain">
            <div className="container">
                <h2 className="text-center">Featured Product</h2>
                {featuredProduct && (
                    <div className="card">
                        <img src={`/images/${featuredProduct.image_url}`} alt={featuredProduct.name} className="card-img-top feature-img" />
                        <div className="card-body text-center">
                            <h3 className="card-title">
                                <Link to={`product/${featuredProduct.product_id}`}>
                                {featuredProduct.name}
                                </Link>
                                </h3>
                            <p className="card-text">{featuredProduct.description}</p>
                            <p className="card-text"><strong>Price: ${featuredProduct.price}</strong></p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Home
