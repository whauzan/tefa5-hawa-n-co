import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
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
    }
  ]

  return (
    <div className="flex flex-row items-center justify-between px-10 py-4">
      <div className="w-32 cursor-pointer" onClick={() => router.replace("/")}>
        <Image src={logo.src} width={822} height={264} />
      </div>
      <ul className="flex flex-row items-center gap-x-8">
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
        <div>Search</div>
        <BsHandbag className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
}
