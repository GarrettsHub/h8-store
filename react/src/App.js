import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"

import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import Products from "./components/Product"
import Single from "./components/Single"

// const [ users, setUsers ] = useState([])

const App =()=> {

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/product' element={<Products />} />
                <Route path='/:path/:id' element={<Single />} />
                <Route path='*' element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App