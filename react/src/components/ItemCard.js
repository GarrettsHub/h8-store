import { Link } from "react-router-dom";

const ItemCard =(props)=> {

    console.log(props)
    return(
        <div className="col">
            <div className="card item-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={`image of ${props.title}`} className="img-fluid image card-img-top item-images" />
                <div className="card-body">
                    <Link to={`/product/${props.id}`}>
                        <h3 className="card-title item-title text-uppercase">
                            {props.title}
                    </h3>
                    </Link>
                    <p className="card-text text-capitalize">
                        {props.price} | {props.category}
                    </p>
                </div>
            </div>
        </div>


    )
}

export default ItemCard