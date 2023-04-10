import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import { useSelector } from "react-redux";
import Index from "./pages/Login/Index";
import Books from "./pages/Books/Books";
import LearnMore from "./pages/Home/Follow/LearMore/LearnMore";
import Buy from "./pages/Home/Follow/Buy/Buy"
import OurCourse from "./pages/OurCourses/OurCourse";
import AboutUs from "./pages/AboutUs/AboutUs";
import Password from "./pages/Login/FirstLogin/password/password";
import FirstLogin from "./pages/Login/FirstLogin/FirstLogin";


function App() {

    const modal = useSelector(state => state.login)

    return (
        <div className="App">
            <Header style={{
                display: modal ? "none" : "block"
            }}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Index/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/learn-more" element={<LearnMore/>}/>
                <Route path="/buy" element={<Buy/>}/>
                <Route path="/our-course" element={<OurCourse/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/password-url" element={<Password/>}/>
                <Route path="/login-url" element={<FirstLogin/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
