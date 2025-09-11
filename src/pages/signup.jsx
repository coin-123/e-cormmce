import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation,  } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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


   const { signup } = useAuth();
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/"; // where to go back after signup


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     signup(email, password);
  //     alert("Account created successfully!");
  //   } catch (err) {
  //     alert(err.message); // show "Account already exists"
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signup( email, password );
      // after successful signup, redirect back

      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };








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
     <div className="flex flex-col md:flex-row items-center justify-center w-full flex-grow h-auto md:h-[550px] mt-[4rem] mb-[5rem] px-4">
  {/* Left Side (Image) */}
  <div className="flex items-center justify-center w-full md:w-[55%] h-[250px] md:h-full mb-6 md:mb-0">
    <img src={frame1} alt="Signup" className="w-full h-full object-contain" />
  </div>

  {/* Right Side (Form) */}
  <div className="flex flex-col items-center justify-center w-full md:w-[40%] px-6">
    <div className="mb-6 text-center md:text-left">
      <h1 className="text-2xl md:text-3xl font-bold mb-[10px]">Create an account</h1>
      <p className="text-gray-600 text-sm md:text-base">Enter your details below</p>
      {error && <div className="mb-3 text-red-600">{error}</div>}
    </div>

    <div className="flex items-center justify-center w-full md:w-[80%]">
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-6 w-full" name="form">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-b-gray-300 pb-2 outline-0"
        />
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="border-b border-gray-300 pb-2 outline-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b border-gray-300 pb-2 outline-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          value="Create Account"
          className="px-4 py-2 bg-[rgba(219,68,68,1)] text-white rounded-md cursor-pointer hover:bg-[#cd5858] transition"
          // onClick={() => prompt("Button clicked!")}
        />

        <span className="flex items-center justify-center border rounded-md border-gray-300 px-4 py-2 cursor-pointer transition hover:bg-gray-100">
          <FcGoogle size={24} className="mr-2" />
          <button
            type="button"
            onClick={() => prompt("Button clicked!")}
            className="font-medium cursor-pointer"
          >
            Continue with Google
          </button>
        </span>

        <div className="flex text-gray-400 items-center justify-center text-sm">
          <p className="mr-[10px]">Already have account?</p>
                  <Link to="/login" className=" underline  hover:text-black transition ease-in-out duration-300">
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
