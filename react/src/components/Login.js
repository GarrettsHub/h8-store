import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ users }) => {
    const [signInData, setSignInData] = useState({
        username: '',
        password: ''
    });

    const [access, setAccess] = useState(false)
    const [user, setUser] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setSignInData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let validUser = false;
    
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === signInData.username && users[i].password === signInData.password) {
                setAccess(true);
                setUser(users[i].username);
                setSignInData({
                    username: '',
                    password: ''
                });
                validUser = true;
                break;
            }
        }
    
        if (!validUser) {
            alert('Invalid username or password. Please try again.');
        }
    };
    

    return (
        <header className="header" id="loginHeader">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-2">Login!</h1>
                        {access && <p className="access-text">Greetings, {user}!</p>}
                    </div>
                    <div className="col-md-7">
                        <form className="sign-in-form" onSubmit={handleSubmit}>
                            <Link to='/register'>
                            <p className="form-text text-center text-capitalize">Not Member? Sign up here</p>
                            </Link>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-auto">
                                        <label htmlFor="signInUsername">Username</label>
                                        <input
                                            type="text"
                                            id="signInUsername"
                                            name="username"
                                            value={signInData.username}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <label htmlFor="signInPassword">Password</label>
                                        <input
                                            type="password"
                                            id="signInPassword"
                                            name="password"
                                            value={signInData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto mt-4">
                                        <button className="btn btn-info" type="submit">Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <Link to="/register" className="btn btn-link">Create an Account</Link> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Login
