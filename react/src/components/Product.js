import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/api/product')
            .then(res => setProducts(res.data))
    }, [])


    const productComponents = products.map(product => {
        return (
            <ItemCard
                key={product.product_id}
                id={product.product_id}
                title={product.name}
                imgUrl={product.image_url}
                price={product.price}
                category={product.category}
                stock={product.stock}
            />
        )
    })

    return (
        <main className="main" id="mainHome">
            <div className="container">
                <div className="row">
                    <h2>In Store</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {productComponents}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products
