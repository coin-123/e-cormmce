import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

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

const icons = [
  // { src: searchIcon, alt: "searchIcon" }
];

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handle = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

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
      <div className="flex flex-col md:flex-row items-center justify-center w-full flex-grow h-auto md:h-[550px] mt-[4rem] mb-[5rem] px-4">
        {/* Left Side (Image) */}

        <div className="flex items-center justify-center w-full md:w-[55%] h-[250px] md:h-full mb-6 md:mb-0">
          <img src={frame1} alt="Signup" className="w-full h-full" />
        </div>

        {/* Right Side (Form) */}

        <div className="flex flex-col items-center justify-center w-full md:w-[40%] px-6">
          <div className="mb-6 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-[10px]">
              Create an account
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Enter your details below
            </p>
            {error && <div className="mb-3 text-red-600">{error}</div>}
          </div>

          <div className="flex items-center justify-cente bg-red-40 w-[57%]">
            <form
              onSubmit={handle}
              action=""
              className="flex flex-col gap-8 w-full "
              name="form"
            >
              {/* <input
              type="text"
              placeholder="Name"
              className="border-b border-b-gray-300 rounded pb-2 outline-0 "
            /> */}
              <input
                // type="text"
                required
                placeholder="Email or Phone Number"
                className="border-b border-gray-300 rounded pb-2 outline-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <input
                // type="password"
                required
                placeholder="Password"
                className="border-b border-gray-300 rounded pb-2 outline-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <span className="flex items-center justify-between ">
                <button
                  //  onClick={() => handle()}
                  type="submit "
                  className="px-[2.5rem] py-[0.7rem] bg-[rgba(219,68,68,1)] text-[0.9rem] text-white rounded-md cursor-pointer hover:bg-[#cd5858] transition"
                >
                  Sign In
                </button>
                

                <Link to="/" className="text-[rgba(219,68,68,1)] text-[0.8rem]">
                  Forget Password?
                </Link>
              </span>
              <div className="mt-3 flex text-gray-400 items-center justify-center text-sm gap-[0.3rem]">
                  Don't have an account?{" "}
                  <Link to="/signup" className=" underline  hover:text-black transition ease-in-out duration-300">
                    Sign up
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

export default Login;
