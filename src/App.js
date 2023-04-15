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
import Self from "./pages/Home/Follow/Buy/Self/Self";
import Control from "./pages/Home/Follow/Buy/Self/Control";
import TeamBuilding from './pages/TeamBuilding/TeamBuilding'
import TwoLogin from "./pages/Login/FirstLogin/password/TwoLogin/TwoLogin";



function App() {

    const modal = useSelector(state => state.login)

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Index/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/learn-more" element={<LearnMore/>}/>
                <Route path="/buy" element={<Buy/>}/>
                <Route path="/self" element={<Self/>}/>
                <Route path="/control" element={<Control/>}/>
                <Route path="/our-course" element={<OurCourse/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/button" element={<TeamBuilding/>}/>
                <Route path="/password-url" element={<Password/>}/>
                <Route path="/login-url" element={<FirstLogin/>}/>
                <Route path="/Two-url" element={<TwoLogin/>}/>


            </Routes>
            <Footer/>
        </div>
    );
}

export default App;