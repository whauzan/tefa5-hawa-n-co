import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-10 py-4">
      <div className="w-32">
        <Image src={logo.src} width={822} height={264} />
      </div>
      <ul className="flex flex-row items-center gap-x-8">
        <li>Home</li>
        <li>About</li>
        <li>Collection</li>
      </ul>
      <div className="flex flex-row items-center gap-x-4">
        <div>Search</div>
        <div>Cart</div>
      </div>
    </div>
  );
}
