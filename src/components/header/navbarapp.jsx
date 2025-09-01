import React from "react";
import Nav from "../header/nav.jsx";
import logoImg from "../../assets/Exclusive.png";
import wishlist from "../../assets/Wishlist.png";
import cart from "../../assets/Cart1.png";
import user from "../../assets/user.png";
import searchIcon from "../../assets/Vector6.png";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contactus" },
  { label: "Sign Up", path: "/signup" },
 
];

const icons = [
  { src: wishlist, alt: "Wishlist", path: "/wishlist" },
  { src: cart, alt: "Cart", path: "/cart"  },
  { src: user, alt: "User", path: "/signup" },
  { src: searchIcon, alt: "searchIcon" },
];

function NavbarApp() {
  return (
    <Nav
      logo={logoImg}
      links={links}
      bgColor="bg-white"
      textColor="text-black"
      showSearch={true}
      icons={icons}
    />
  );
}

export default NavbarApp;