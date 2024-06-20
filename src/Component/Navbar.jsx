import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from "../assets/Favicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#79092A] md:bg-black text-white font-Fjalla mb-[20px] md:my-[45px] py-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center">
          <div className="flex items-center justify-between">
            {/* <div className="flex-shrink-0 md:hidden w-[60px] h-[60px] overflow-hidden">
              <img src={Logo} alt="" className="object-fill w-full" />
            </div> */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="hover:bg-[#FFB041] hover:text-black px-3 py-2 rounded-md text-[26px] font-[400]"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a
                  href="#buy"
                  className="hover:bg-[#FFB041] hover:text-black px-3 py-2 rounded-md text-[26px] font-[400]"
                  onClick={closeMenu}
                >
                  BUY$BUG
                </a>
                <a
                  href="#tokenomics"
                  className="hover:bg-[#FFB041] hover:text-black px-3 py-2 rounded-md text-[26px] font-[400]"
                  onClick={closeMenu}
                >
                  TOKENOMICS
                </a>
                <a
                  href="#how"
                  className="hover:bg-[#FFB041] hover:text-black px-3 py-2 rounded-md text-[26px] font-[400]"
                  onClick={closeMenu}
                >
                  HOW TO BUY
                </a>
                <a
                  href="#ecosystem"
                  className="hover:bg-[#FFB041] hover:text-black px-3 py-2 rounded-md text-[26px] font-[400]"
                  onClick={closeMenu}
                >
                  ECOSYSTEM
                </a>
                <a
                  href="#disclaimer"
                  className="hover:bg-[#FFB041] hover:text-black px-3 py-2 rounded-md text-[26px] font-[400]"
                  onClick={closeMenu}
                >
                  DISCLAIMER
                </a>
              </div>
            </div>
          </div>

          <div className="font-Fjalla md:hidden  text-[50px] font-[400] text-white bg-[#79092A] py-[9px] text-center">
            <p className=" " id="">
              BUY $BUG
            </p>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md "
            >
              {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid">
          <a
            href="/"
            className="hover:bg-[#FFB041] hover:text-black inline-block px-3 py-2 rounded-md text-base"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#buy"
            className="hover:bg-[#FFB041] hover:text-black inline-block px-3 py-2 rounded-md text-base"
            onClick={closeMenu}
          >
            BUY$BUG
          </a>
          <a
            href="#tokenomics"
            className="hover:bg-[#FFB041] hover:text-black inline-block px-3 py-2 rounded-md text-base"
            onClick={closeMenu}
          >
            TOKENOMICS
          </a>
          <a
            href="#how"
            className="hover:bg-[#FFB041] hover:text-black inline-block px-3 py-2 rounded-md text-base"
            onClick={closeMenu}
          >
            HOW TO BUY
          </a>
          <a
            href="#ecosystem"
            className="hover:bg-[#FFB041] hover:text-black inline-block px-3 py-2 rounded-md text-base"
            onClick={closeMenu}
          >
            ECOSYSTEM
          </a>
          <a
            href="#disclaimer"
            className="hover:bg-[#FFB041] hover:text-black inline-block px-3 py-2 rounded-md text-base"
            onClick={closeMenu}
          >
            DISCLAIMER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
