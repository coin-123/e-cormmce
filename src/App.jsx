
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"; // ✅ curly braces
import  Signup  from "./pages/signup.jsx"
import Login from "./pages/login.jsx";
import Contactus from './pages/contactus.jsx'
// import Wishlist from './pages/wishlist.jsx'
import WishlistPage from "./pages/wishlist.jsx";


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contactus" element={<Contactus />} />
    <Route path="/wishlist" element={<WishlistPage/>} />





    </Routes>
 
    {/* <Signupnav /> */}
    </>
  )
}

export default App
