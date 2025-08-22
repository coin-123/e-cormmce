// import React from "react";
// import { Link } from "react-router-dom";

// import frame1 from "../../assets/Vector6.png";
// import frame2 from "../../assets/Wishlist.png";
// import frame3 from "../../assets/Cart1.png";
// import frame4 from "../../assets/user.png";
// import frame5 from "../../assets/Exclusive.png";

// const Nav = () => {
//   return (
//     <section className="flex items-center justify-center w-full h-[80px]  pt-[1.1rem] border-b-[1px] border-solid border-[#e2e2e2]">
//       <div className="flex items-center justify-between w-[90%] h-[38px] ">
//         <div className="">
//           {" "}
//           <img src={frame5} alt="" />
//         </div>
//         <div className="flex items-center justify-center gap-[30px]">

//            {/* <nav className="flex items-center justify-center gap-[30px] p-4 bg-gray-100"> */}
//         {/* <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/about" className="hover:underline">About</Link>
//         <Link to="/contact" className="hover:underline">Contact</Link>
//         <Link to="/signup" className="hover:underline">Sign Up</Link> */}
//       {/* </nav> */}



//             {["Home", "Contact", "About", "Sign Up"].map((label, idx) => {
//      const targets = ["/", "contact",  "about", "signup"];
//      return (
//        <Link
//          key={idx}
//          to={targets[idx]}
//          smooth={true}
//          duration={500}
//          className="relative group cursor-pointer text-black fon-medium"
//        >
//          {label}
//          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
//        </Link>
//      );
//    })} 
//         </div>

//         <div className="flex items-center justify-between w-[400px] h-[38px]   gap-[10px]">
//           <div className="flex items-center justify-center rounded-[3px] bg-[#e2e2e2] ">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="w-[200px] h-[30px]  outline-none px-2 text-[12px] "
//             />
//             <button className=" text-white px-3 h-[30px] cursor-pointer">
//               {" "}
//               <img src={frame1} alt="" />{" "}
//             </button>
//           </div>
//           <div className="flex items-center justify-between  w-[115px]">
//             <img src={frame2} alt="" className=" cursor-pointer" />
//             <img src={frame3} alt="" className=" cursor-pointer" />
//             <img src={frame4} alt="" className=" cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Nav;












// reusable nav bar



import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import logoImg from "../../assets/Exclusive.png";
// import wishlist from "../../assets/Wishlist.png";
// import cart from "../../assets/Cart1.png";
// import user from "../../assets/user.png";
// import searchIcon from "../../assets/Vector6.png";


const Nav = ({ logo, links, bgColor, textColor, showSearch, icons }) => (
  <section className={`flex items-center justify-center w-full h-[80px] pt-[1.1rem] border-b-[1px] border-solid border-[#e2e2e2] ${bgColor}`}>
    <div className="flex items-center justify-between w-[90%] h-[38px]">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" />
      </div>
      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-[30px]">
        {links.map(({ label, path }, idx) => (
          <Link
            key={idx}
            to={path}
            className={`relative group cursor-pointer ${textColor} font-medium`}
          >
            {label}
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500 ease-in-out`}></span>
          </Link>
        ))}
      </div>
      {/* Search and Icons */}
      <div className="flex items-center justify-between w-[400px] h-[38px] gap-[10px]">
        {showSearch && (
          <div className="flex items-center justify-center rounded-[3px] bg-[#e2e2e2]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[200px] h-[30px] outline-none px-2 text-[12px]"
            />
            <button className="text-white px-3 h-[30px] cursor-pointer">
              <img src={icons[3]?.src} alt="search" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between w-[115px]">
          {icons.slice(0, 3).map((icon, idx) => (
            <img key={idx} src={icon.src} alt={icon.alt} className="cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Nav;