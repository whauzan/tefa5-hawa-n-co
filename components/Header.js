import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import { BiSearchAlt, BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const router = useRouter();
  const {
    showCart,
    setShowCart,
    totalQuantities,
    showSearch,
    setShowSearch,
    showSidebar,
    setShowSidebar,
  } = useStateContext();
  
  const navigations = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Collection",
      link: "/collection",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-between fixed w-full left-0 top-0 bg-white px-4 md:px-10 py-4 text-brown-primary z-30">
      {showSidebar ? (
        <GrClose
          className="w-5 h-5 block md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      ) : (
        <BiMenuAltLeft
          className="w-5 h-5 block md:hidden"
          onClick={() => setShowSidebar(true)}
        />
      )}
      <Sidebar
        navigations={navigations}
      />
      <div
        className="w-24 md:w-32 cursor-pointer"
        onClick={() => router.replace("/")}
      >
        <Image src={logo.src} width={822} height={264} alt={"Logo"} />
      </div>
      <ul className="md:flex flex-row items-center gap-x-8 hidden">
        {navigations.map((nav) => (
          <li
            className="cursor-pointer"
            key={nav.name}
            onClick={() => router.replace(nav.link)}
          >
            {nav.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center gap-x-4">
        <div className="relative h-5 transition-all hidden md:block">
          <BiSearchAlt
            className={`w-5 h-5 cursor-pointer ${
              showSearch ? "invisible" : "visible"
            }`}
            onClick={() => setShowSearch(true)}
          />
          <div
            className={`absolute w-60 h-full right-0 -top-1/2 ${
              showSearch ? "visible" : "invisible"
            }`}
          >
            <SearchBar />
          </div>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <span className="absolute -top-1 -right-1 bg-brown-dark rounded-full w-4 h-4 flex justify-center items-center text-brown-light text-xs">
            {totalQuantities}
          </span>
          <BsHandbag className="w-5 h-5" />
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  );
}
