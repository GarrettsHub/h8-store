
const User= (props)=> {

    const month = props.dateCreated.slice(5, 7)

    const year = props.dateCreated.slice(0, 4)

    return(
        <div className="col-md-3">
            <div className="user-div">
                <h3 className="heading text-capitalize">
                    {props.lastName}, {props.firstName}
                </h3>
                <p className="user-text">username: {props.username}</p>
                <p className="user-email">
                    email: {props.email}
                </p>
                <p className="user-date">Member Since: {month}/{year}</p>
            </div>
        </div>
    )
}

export default User