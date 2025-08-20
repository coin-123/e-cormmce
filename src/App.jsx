
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import  About  from "./pages/About.jsx";
import  Signup  from "./pages/signup.jsx"


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<Signup />} />


    </Routes>
 
    {/* <Signupnav /> */}
    </>
  )
}

export default App
