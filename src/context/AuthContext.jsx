import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Add this line

  // Load user from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Sign up
  const signup = (email, password, firstName= "", lastName="") => {

    if (!email || !password) {
        throw new Error("Email and password required");
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    // const exists = users.find((u) => u.email === email);
    const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (exists) {
      throw new Error("Account already exists");
    }

    const newUser = { email, password, firstName, lastName };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };



  // Login
  const login = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
    //   (u) => u.email === email && u.password === password
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!validUser) throw new Error("Invalid credentials");

    localStorage.setItem("currentUser", JSON.stringify(validUser));
    setUser(validUser);
  };



  // Logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login"); // Redirect to login page after logout
  };


  const updateProfile = (updatedUser, oldPassword,) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) throw new Error("No user logged in");

  // Ensure both passwords are strings and trimmed
  if ((currentUser.password || "").trim() !== (oldPassword || "").trim()) {
    throw new Error("Old password is incorrect");
  }

  // If password is not being changed, keep the old password
  const finalUser = {
    ...currentUser,
    ...updatedUser,
    password: updatedUser.password ? updatedUser.password : currentUser.password,
  };

  users = users.map((u) =>
    u.email.toLowerCase() === currentUser.email.toLowerCase()
      ? finalUser
      : u
  );

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(finalUser));
  setUser(finalUser);
};


  return (
    <AuthContext.Provider value={{ user, signup, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);