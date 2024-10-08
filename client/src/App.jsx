import { BrowserRouter, Routes , Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import  Footer  from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import UpdatePost from "./pages/UpdatePost.jsx";
import PostPage from "./pages/PostPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Search from "./pages/Search.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/sign-in" element = {<Signin />} />
      <Route path = "/sign-up" element = {<Signup />} />
      <Route path = "/search" element = {<Search />} />
      <Route element={<PrivateRoute/>}>
      <Route path = "/dashboard" element = {<Dashboard/>} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path = "/create-post" element = {<CreatePost/>} />
       <Route path="/update-post/:postId" element={<UpdatePost/>}/>
      </Route>
     
      <Route path="/post/:postSlug" element = {<PostPage/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
