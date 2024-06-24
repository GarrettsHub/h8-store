import { Link } from "react-router-dom";

const Card =(props)=> {

    return(
        <div className="col">
            <div className="card h-100">
                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid image card-img-top my-img"/>
                <div className="card-body">
                    <h3 className="card-title">
                        <Link to={`${props.path}/${props.id}`}>
                            {props.name}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Card