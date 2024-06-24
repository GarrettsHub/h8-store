import { useState } from 'react'

const Login =( {users} )=> {

    const [ signInData, setSignInData ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event)=> {
        const { name, value} = event.target

        setSignInData(prevState => {
            return{
                ...prevState,
                [ name ]: value
            }
        })
    }

    const [ access, setAccess ] = useState(false)

    const [ user, setUser ] = useState('')

    const handleSubmit = (event)=> {
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === signInData.username) && (users[i].password === signInData.password)) {
                setAccess(prevState => !prevState)
                setUser(users[i].username)
                setSignInData({
                    username: '',
                    password: ''
                })
            }
        } 
        console.log(access)
        return access
    }

    return(
        <header className="header" id="loginHeader">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-2">
                            Login!
                        </h1>
                        {access && <p className="access-text">Greetings, {user}!</p>}
                    </div>
                    <div className="col-md-7">
                        <form className="sign-in-form" onSubmit={handleSubmit}>
                            <p className="form-text text-center text-capitalize">member? sign in here</p>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-auto">
                                        <label htmlFor="signInUsername">username</label>
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
                                        <label htmlFor="signInUsername">password</label>
                                        <input 
                                            type="text" 
                                            id="signInPassword"
                                            name="password"
                                            value={signInData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto mt-4">
                                        <button className="btn btn-info" type="submit">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Login