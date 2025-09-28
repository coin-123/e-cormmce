import React from 'react'
import Nav from "../components/header/navbarapp.jsx";
import Footer from "../components/footer/footer.jsx";
// import Anima from "../components/animated/anima.jsx";



import logoImg from "../assets/Exclusive.png";
import wishlist from "../assets/Wishlist.png";
import cart from "../assets/Cart1.png";
import user from "../assets/user.png";
import searchIcon from "../assets/Vector6.png";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contactus" },
  { label: "Sign Up", path: "/signup" },
];

const icons = [
  { src: wishlist, alt: "Wishlist" },
  { src: cart, alt: "Cart" },
  { src: user, alt: "User" },
  { src: searchIcon, alt: "searchIcon" },
];


const Contactus = () => {
  return (
    <section className=" flex flex-col justify-between items-center w-full h-screen">
        {/* <Anima /> */}

        <Nav
        logo={logoImg}
        links={links}
        bgColor="bg-white"
        textColor="text-black"
        showSearch={true}
        icons={icons}
         />



         <div className="flex items-center justify-center">
            "PAGE UNDER MAINTENANCE"
         </div>


         <Footer />


    </section>
  )
}

export default Contactus