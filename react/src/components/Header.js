import { Link } from 'react-router-dom'

const Header =()=> {

    return(

        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="header text-capitalize text-md-center display-3">
                            <Link to='/'>h8</Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-around text-capitalize">
                            <Link to='/about'>about</Link>
                            <Link to='/product'>see what's in store</Link>
                            <Link to='/login'>Login or Sign Up!</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header