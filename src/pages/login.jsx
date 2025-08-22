import React from "react";
import { Link } from 'react-router-dom';

// import { FcGoogle } from "react-icons/fc"; // colored Google icon
import Anima from "../components/animated/anima.jsx";    
import Nav from "../components/header/nav.jsx";
import Footer from "../components/footer/footer.jsx";    
import frame1 from "../assets/phocart.png";
import logoImg from "../assets/Exclusive.png";
// import searchIcon from "../assets/Vector6.png";


const LoginLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Sign Up", path: "/signup" },
];

const icons =[
    // { src: searchIcon, alt: "searchIcon" }
  

]

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full ">


      {/* Top components */}

      <Anima />
      <Nav
        logo={logoImg}
        links={LoginLinks}
        bgColor=""
        textColor=""
        showSearch={false} // hide search bar
        icons={icons} // no icons on signup page
      />

      {/* Signup Content */}
      <div className="flex items-center justify-center w-full flex-grow h-[550px] mt-[4rem] mb-[5rem]" >


        {/* Left Side (Image) */}

        <div className="flex items-center justify-center w-[55%] h-[100%] ">
          <img src={frame1} alt="Signup" className="w-full h-full" />
        </div>


        {/* Right Side (Form) */}

        <div className="flex flex-col items-center justify-center w-[40%] px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-[10px]">Log in to Exclusive</h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <div className="flex items-center justify-cente bg-red-40 w-[57%]">
          <form action="" className="flex flex-col gap-8 w-full " name="form">
              {/* <input
              type="text"
              placeholder="Name"
              className="border-b border-b-gray-300 rounded pb-2 outline-0 "
            /> */}
            <input
              type="text"
              required
              placeholder="Email or Phone Number"
              className="border-b border-gray-300 rounded pb-2 outline-0"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="border-b border-gray-300 rounded pb-2 outline-0"
            />
            <span className="flex items-center justify-between ">            
            <button 
            /* onClick={() => prompt("Button clicked!")} */
            type="submit "
            className="px-[2.5rem] py-[0.7rem] bg-[rgba(219,68,68,1)] text-[0.9rem] text-white rounded-md cursor-pointer hover:bg-[#cd5858] transition"
            >
            Sign In
            </button>
        
             <Link to='/' className="text-[rgba(219,68,68,1)] text-[0.8rem]">Forget Password?</Link>
            
            </span>
            
            
          </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Login;
