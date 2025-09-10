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
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);

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
      (u) => u.email === email && u.password === password
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

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
