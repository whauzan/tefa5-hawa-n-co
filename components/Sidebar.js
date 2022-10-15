import { useRouter } from "next/router";
import React from "react";
import { useStateContext } from "../context/StateContext";
import SearchBar from "./SearchBar";

export default function Sidebar({ navigations }) {
  const { showSidebar, setShowSidebar } = useStateContext();
  const router = useRouter();
  return (
    <>
      {showSidebar && (
        <div className="fixed md:hidden h-screen w-screen top-16 left-0 bg-white z-20 p-4">
          <div className="flex flex-col gap-y-4">
            <SearchBar />
            <ul className="flex flex-col gap-y-4">
              {navigations.map((nav) => (
                <li
                  className="cursor-pointer font-semibold"
                  key={nav.name}
                  onClick={() => {
                    router.replace(nav.link);
                    setShowSidebar(false);
                  }}
                >
                  {nav.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
