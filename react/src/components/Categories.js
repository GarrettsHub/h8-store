import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ItemCard from './ItemCard'

const Category = () => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3005/api/category/${categoryId}`)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))
    }, [categoryId])

    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <h2>Category Products</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {products.map(product => (
                            <ItemCard key={product.product_id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Category
