import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ItemCard from './ItemCard'


const Single =(props)=> {

    const [data, setData] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setData(res.data))
    }, [])

    console.log(data)

    // const productComponents = data.map(item => {

    //     let path
    //     let pathId

    //     return <ItemCard
    //     key={item.product_id}
    //     id={item.product_id}
    //     title={item.name}
    //     imgUrl={item.image_url}
    //     price={item.price}
    //     category={item.category}
    //     stock={item.stock}
    //     path={`/${path}`}
    //     pathId={pathId}
    //     />
    // })

    return(
        <main className="main" id="singleMain">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <ItemCard 
                    />
                </div>
            </div>
        </main>
    )
}

export default Single