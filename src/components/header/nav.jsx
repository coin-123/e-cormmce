import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useStore } from "../../context/StoreContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { Menu, X } from "lucide-react"; // ✅ hamburger icons

const Nav = ({ logo, links, bgColor, textColor, showSearch, icons }) => {
  const { wishlist } = useStore();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className={`flex items-center justify-center w-full h-[70px] border-b border-[#e2e2e2] ${bgColor}`}
    >
      <div className="flex items-center justify-between w-[90%]">
        {/* Logo */}
        <div className="items-center flex">
          <img src={logo} alt="Logo" className="object-cover md:h-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ label, path }, idx) => (
            <Link
              key={idx}
              to={path}
              className={`relative group cursor-pointer ${textColor} font-medium`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500 ease-in-out`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-3">
          {showSearch && (
            <div className="hidden sm:flex items-center bg-[#e2e2e2] rounded px-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-[120px] sm:w-[200px] h-[30px] outline-none text-[12px] bg-transparent"
              />
              <button>
                <img src={icons[3]?.src} alt="search" className="h-4" />
              </button>
            </div>
          )}

          <div className="flex items-center gap-4 relative">
            {icons.slice(0, 3).map((icon, idx) => (
              <Link key={idx} to={icon.path || "#"} className="relative">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={icon.src}
                  alt={icon.alt}
                  className="h-5 sm:h-6"
                />

                {/* Wishlist badge */}
                {icon.alt === "Wishlist" && wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {wishlist.length}
                  </span>
                )}

                {/* Cart badge */}
                {icon.alt === "Cart" && cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cart.length}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="md:hidden ml-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[120px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50">
          {links.map(({ label, path }, idx) => (
            <Link
              key={idx}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-800 hover:text-black"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Nav;
