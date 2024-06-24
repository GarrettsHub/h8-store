

const Form =({ formData, handleChange, handleSubmit }) => {

    return(
        <main className="main" id="formMain">
            <div className="container">
                <h2 className="text-capitalize text-center">create an account:</h2>
                <form id="form" className="login-form form" onSubmit={handleSubmit}>
                    <div className="mb-3 text-center row">
                        <div className="col-auto">
                            <label htmlFor="fName" className="form-label text-capitalize">first name</label>
                            <input 
                                type="text" 
                                id="fName"
                                name="fName"
                                value={formData.fName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="lName" className="form-label text-capitalize">last name</label>
                            <input 
                                type="text" 
                                id="lName"
                                name="lName"
                                value={formData.fName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3 text-center row">
                        <div className="col-auto">
                            <label htmlFor="email" className="form-label text-capitalize">email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="username" className="form-label text-capitalize">create a username</label>
                            <input 
                                type="username"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="password" className="form-label text-capitalize">create a passwrod</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success text-capitalize" type="submit">
                                create login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}