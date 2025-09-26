import React, { useState } from "react";
import Nav from "../components/header/navbarapp.jsx";
import Anima from "../components/animated/anima.jsx";
import Footer from "../components/footer/footer.jsx";
import { label } from "framer-motion/client";
import { useAuth } from "../context/AuthContext";

const Account = () => {
  // State for each input
  const { user, updateProfile, logout } = useAuth();
  // const { user } = useAuth();
  // const [name, setName] = useState(user?.name || "");
  // const [password, setPassword] = useState(user?.password || "");
  const [message, setMessage] = useState("");

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [oldPassword, setOldPassword] = useState(user?.oldPassword || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Input configs for mapping
  const leftInputs = [
    {
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
  ];

  const rightInputs = [
    {
      label: "Old Password",
      type: "password",
      placeholder: "Old password",
      value: oldPassword,
      onChange: (e) => setOldPassword(e.target.value),
    },
    {
      label: "New Password",
      type: "password",
      placeholder: "New password",
      value: newPassword,
      onChange: (e) => setNewPassword(e.target.value),
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      updateProfile({ firstName, email, password: newPassword }, oldPassword);
      // updateProfile(  firstName, email, confirmPassword, newPassword, oldPassword);
      // updateProfile(
      //   { firstName, password: newPassword }, // updated fields
      //   oldPassword                       // old password check
      // );
      alert("Profile updated!");
      // updateProfile(firstName, email, confirmPassword, newPassword);
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <Anima />
      <Nav />

      {/* welcome user */}
      <div className="w-[90%] flex   mt-10 mb-5 text-sm ">
        <p className="text-lg font-bold">
          Welcome!, {user?.firstName || "Guest"}!
        </p>
      </div>
      <div className="w-full h-[90%] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[rgba(219,68,68,1)]">
          Edit Profile
        </h1>
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 w-[90%] md:w-[90%] mt-10 "
          >
            <div className="flex flex-col sm:flex-row gap-[2.5rem] ">
              {/* Left inputs */}
              <div className="gap-[1rem] flex flex-col w-full ">
                {leftInputs.map((field, idx) => (
                  <div key={idx} className="flex flex-col gap-1 w-full">
                    <p className="text-sm font-medium">{field.label}</p>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[rgba(219,68,68,1)]"
                    />
                  </div>
                ))}
              </div>
              {/* Right inputs */}
              <div className="gap-[1rem] flex flex-col w-full">
                {rightInputs.map((field, idx) => (
                  <div key={idx} className="w-full flex flex-col gap-1">
                    <p className="text-sm font-medium">{field.label}</p>
                    <input
                      // key={idx}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[rgba(219,68,68,1)]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-[20%] bg-[rgba(219,68,68,1)] text-white rounded-md p-3 hover:bg-[rgba(200,68,68,1)] transition"
            >
              Save Changes
            </button>
            {message && <p>{message}</p>}
            <div className="w-full flex justify-end mb-[0.5rem]">
              <button
              className="w-[20%] bg-[rgba(219,68,68,1)] text-white rounded-md p-3 hover:bg-[rgba(200,68,68,1)] transition"
              onClick={logout}
            >
              Logout
            </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Account;
