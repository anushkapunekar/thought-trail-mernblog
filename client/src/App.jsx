import { BrowserRouter, Routes , Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import About from "./pages/about"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      < Route path = "/about" element = {<About/>}/>
      <  Route path = "/sign-in" element = {<Signin />} />
      <Route path = "/sign-up" element = {<Signup />} />
      <Route path = "/dashboard" element = {<Dashboard/>} />
      <Route path="/project" element = {<Project/>} />

    </Routes>
    </BrowserRouter>
  )
}
