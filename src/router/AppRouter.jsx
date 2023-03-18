import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyles } from "../components/globalstyles/Global.styles"
import Navbar from "../components/nav/Navbar"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter 