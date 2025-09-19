const updateProfile = (updatedUser) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) throw new Error("No user logged in");

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
    return { updateProfile };