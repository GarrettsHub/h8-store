import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="text-capitalize text-md-center display-3">
                            <Link to='/' className="home-header">h8</Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="navbar my-nav navbar-expand-md">
                            <div className="container-fluid">
                                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav nav justify-content-around">
                                        <li className="nav-item">
                                            <Link to='/about' className="a-link nav-link">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/product' className="a-link nav-link">See What's In Store</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/productForm' className="a-link nav-link">Add Your Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/login' className="a-link nav-link">Login or Sign Up!</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
