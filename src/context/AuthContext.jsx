import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Sign up
  const signup = (email, password) => {

    if (!email || !password) {
        throw new Error("Email and password required");
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    // const exists = users.find((u) => u.email === email);
    const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (exists) {
      throw new Error("Account already exists");
    }

    const newUser = { email, password };
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
  };


  // updae profile
  const updateProfile = (updatedUser) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

   if (!currentUser) throw new Error("No user logged in");

  // ✅ Check if old password matches
  if (currentUser.password !== oldPassword) {
    throw new Error("Old password is incorrect");
  }

  // Replace the old user in the array
  users = users.map((u) =>
    u.email.toLowerCase() === currentUser.email.toLowerCase()
      ? { ...u, ...updatedUser } // merge updates
      : u
  );

  // Save new user data
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, ...updatedUser }));

  // If you’re using React state for user:
  setUser({ ...currentUser, ...updatedUser });
};



  return (
    <AuthContext.Provider value={{ user, signup, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
