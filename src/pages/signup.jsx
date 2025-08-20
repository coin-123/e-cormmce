import React from "react";
import Anima from "../components/animated/anima";    
import Navbar from "../components/header/nav";
import Footer from "../components/footer/footer";    
import frame1 from "../assets/phocart.png";

const Signup = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      {/* Top components */}
      <Anima />
      <Navbar />

      {/* Signup Content */}
      <div className="flex items-center justify-center w-full flex-grow">


        {/* Left Side (Image) */}
        <div className="flex items-center justify-center w-[55%]">
          <img src={frame1} alt="Signup" className="w-full" />
        </div>

        

        {/* Right Side (Form) */}
        <div className="flex flex-col justify-center w-[40%] px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Signup;