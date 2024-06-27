import { Route, Routes } from "react-router-dom"
import { useState, useEffect} from "react"
import axios from "axios"

import Header from "./components/Header"

import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import Products from "./components/Product"
import Single from "./components/Single"
import SpinnerLoader from "./components/SpinnerLoader"
import Login from "./components/Login"
import Form from "./components/Form"
import ProductForm from "./components/ProductForm"



const App =()=> {

    

    const handleChange =(event)=> {
        const {name, value} = event.target
        setFormData(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: '',
    })

    const [ users, setUsers ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))
    }, [])

    console.log(users)

    const handleSubmit =()=> {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (regex.test(formData.password) === false ) {
            alert('Password not valid.\n-Must contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character &\n-at least 8 characters')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }
    }
    

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/product' element={<Products />} />
                <Route path='/login' element={<Login users={users} />} />
                <Route path='/register' element={
                    <Form
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
                } />
                <Route path='/productForm' element={<ProductForm />} />
                <Route path='/:path/:id' element={<Single />} />
                <Route path='*' element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App