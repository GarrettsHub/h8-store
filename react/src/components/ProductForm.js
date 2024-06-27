import { useState, useEffect } from "react"

import axios from "axios"


const ProductForm =({ handleChange, handleSubmit }) => {

    const [prodFormData, setProdFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        category_id: ''
    })

    const [prod, setProd] = useState([])

    console.log(prod)

    useEffect(()=> {
        axios.get('http://localhost:3005/api/product').then(res => setProd(res.data))
        
    },[])

    console.log(prod)

    return(
        <main className="main" id="formMain">
            <div className="container">
                <h2 className="text-capitalize text-center">Add an item:</h2>
                <form id="form" className="login-form form" onSubmit={handleSubmit}>
                    <div className="mb-3 text-center row">
                        <div className="col-auto">
                            <label htmlFor="name" className="form-label text-capitalize">product name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                value={prodFormData.name}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="description" className="form-label text-capitalize">product description</label>
                            <input 
                                type="text" 
                                id="description"
                                name="description"
                                value={prodFormData.description}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3 text-center row">
                        <div className="col-auto">
                            <label htmlFor="price" className="form-label text-capitalize">price</label>
                            <input 
                                type="price"
                                id="price"
                                name="price"
                                value={prodFormData.price}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="category" className="form-label text-capitalize">category</label>
                            <input 
                                type="category"
                                id="category"
                                name="category"
                                value={prodFormData.category}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="category_id" className="form-label text-capitalize">category id</label>
                            <input 
                                type="num"
                                id="category_id"
                                name="category_id"
                                value={prodFormData.category_id}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-success text-capitalize" type="submit">
                                create product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ProductForm