import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // colored Google icon
import Anima from "../components/animated/anima.jsx";
import Nav from "../components/header/nav.jsx";
import Footer from "../components/footer/footer.jsx";
import frame1 from "../assets/phocart.png";
import logoImg from "../assets/Exclusive.png";
// import searchIcon from "../assets/Vector6.png";

const signupLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Sign Up", path: "/signup" },
];

const icons = [
  // { src: searchIcon, alt: "searchIcon" }
];

const Signup = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      {/* Top components */}

      <Anima />
      <Nav
        logo={logoImg}
        links={signupLinks}
        bgColor=""
        textColor=""
        showSearch={false} // hide search bar
        icons={icons} // no icons on signup page
      />

      {/* Signup Content */}
      <div className="flex items-center justify-center w-full flex-grow h-[550px] mt-[4rem] mb-[5rem]">
        {/* Left Side (Image) */}

        <div className="flex items-center justify-center w-[55%] h-[100%] ">
          <img src={frame1} alt="Signup" className="w-full h-full" />
        </div>

        {/* Right Side (Form) */}

        <div className="flex flex-col items-center justify-center w-[40%] px-6">
          <div className="mb-6 ">
            <h1 className="text-3xl font-bold mb-[10px]">Create an account</h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <div className="flex items-center justify-cente bg-red-40 w-[58%]">
            <form action="" className="flex flex-col gap-8 w-full " name="form">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-b-gray-300 rounded pb-2 outline-0 "
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="border-b border-gray-300 rounded pb-2 outline-0"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-b border-gray-300 rounded pb-2 outline-0"
              />
              <input
                type="button"
                value="Create Account"
                className="px-4 py-2 bg-[rgba(219,68,68,1)] text-white rounded-md cursor-pointer hover:bg-[#cd5858] transition"
                onClick={() => prompt("Button clicked!")}
              />
              <span className="flex items-center justify-center border-[0.15rem] rounded-md border-gray-300 px-4 py-2 cursor-pointer transition hover:bg-gray-100">
                <FcGoogle size={24} className="mr-2" />
                <button
                  type="button"
                  onClick={() => prompt("Button clicked!")}
                  className="font-medium cursor-pointer"
                >
                  Continue with Google
                </button>
              </span>
              <div className="flex text-gray-400 items-center justify-center">
                <p className="mr-[10px]">Already have account?</p>
                <Link to="/login" className="underline">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Signup;
