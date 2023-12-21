import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle, AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import websiteLogo from "./assets/website-logo.svg";
import {
  SignedInOrRedirect,
  SignedOut,
  SignedOutOrRedirect,
  Provider,
} from "@gadgetinc/react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
  Link,
} from "react-router-dom";

// MenuItems JSON
const menuItems = [
  { text: "Home", url: "/" },
  { text: "Our services", url: "/#service" },
  { text: "Pricing", url: "/#pricing" },
];

const iconComponents = [
  { Icon: BsDiscord, color: "text-indigo-500", url: "#" },
  { Icon: AiFillInstagram, color: "text-rose-500", url: "#" },
  { Icon: FaTwitter, color: "text-sky-600", url: "#" },
  { Icon: MdEmail, color: "text-teal-500", url: "#" },
];

const IconList = () => (
  <div className="header-follow absolute bottom-5 left-0 right-0">
    <div className="flex items-center justify-evenly space-x-2 px-6 py-4">
      {iconComponents.map(({ Icon, color, url }) => (
        <a key={color} href={url}>
          <Icon className={`text-2xl black`} />
        </a>
      ))}
    </div>
  </div>
);

function MobileMenu({ onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".main-nav-menu-mobile")) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="main-nav-menu-mobile z-50 bg-white/70 backdrop-blur-lg shadow-sm lg:shadow-none absolute left-0 top-0 bottom-0 right-0 border-r border-slate-400/30 border-dashed w-[270px] md:w-[300px] lg:flex lg:w-[300px] lg:flex-col">
      <button>
        <div className="header-logo p-5 flex items-center space-x-2">
          <img src={websiteLogo} alt="" />
          <h2 className="text-black font-bold text-2xl">Square</h2>
        </div>
      </button>
      <div className="header-menu lg:hidden">
        <SignedOut>
          <ul className="flex-col space-y-5 px-8 py-5 pb-8 text-sm font-semibold text-zinc-700/60">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className="w-fit border-b border-transparent hover:border-zinc-900/90 transition-colors duration-100 ease-linear hover:text-zinc-900/90"
              >
                <a href={menuItem.url}>
                  <button>{menuItem.text}</button>
                </a>
              </li>
            ))}
          </ul>
          <div className="header-button space-y-2">
            <div className="px-6 lg:flex lg:items-center">
              <a
                href=""
                className="flex w-full items-center text-black justify-center rounded-full border border-black px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                <Link to="/sign-up" style={{ color: "black" }}>
                  Sign Up
                </Link>
              </a>
            </div>

            <div className="px-6 lg:flex lg:items-center">
              <a
                href="#"
                className="flex w-full items-center text-black justify-center rounded-full border border-black px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                <Link to="/sign-in" style={{ color: "black" }}>
                  Login
                </Link>
              </a>
            </div>
          </div>
        </SignedOut>
      </div>
      <IconList />
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (event) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="navbar-home top-0 py-2 lg:py-5 w-full bg-transparent lg:relative z-50">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-3 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <img src={websiteLogo} alt="" />
              <h2 className="text-black font-bold text-2xl">Square</h2>
            </div>
          </button>
          <SignedOut>
            <div className="header-menu hidden lg:block">
              <ul className="flex space-x-10 text-sm font-semibold text-zinc-700/60">
                {menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    className="w-fit border-b border-transparent hover:border-zinc-900/90 transition-colors duration-100 ease-linear hover:text-zinc-900/90"
                  >
                    <a href={menuItem.url}>
                      <button>{menuItem.text}</button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-button space-x-2">
              <div className="hidden lg:flex lg:items-center">
                <button className="flex items-center text-black justify-center rounded-full border border-black px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  <Link to="/sign-in" style={{ color: "black" }}>
                    Login
                  </Link>
                </button>
                {/* Add margin here for spacing */}
                <button className="flex items-center text-black justify-center rounded-full border border-black px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 ml-4">
                  <Link to="/sign-up" style={{ color: "black" }}>
                    Sign up
                  </Link>
                </button>
              </div>
            </div>
          </SignedOut>
          <div className="flex items-center justify-center lg:hidden">
            <button
              className={`advanced-setting-toggle focus:outline-none ${
                isMobileMenuOpen
                  ? "rounded-full bg-slate-200 text-slate-800"
                  : "text-slate-200"
              }`}
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <AiOutlineCloseCircle className="text-2xl focus:outline-none active:scale-110 active:text-slate-200" />
              ) : (
                <HiMenuAlt3 className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="main-nav-menu fixed inset-0 z-50 transform overflow-auto bg-transparent transition duration-150 lg:hidden">
          <MobileMenu onClose={handleMobileMenuClose} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
