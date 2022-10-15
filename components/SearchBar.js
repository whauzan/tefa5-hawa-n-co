import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";

export default function SearchBar() {
  const { setShowSearch, setShowSidebar } = useStateContext();
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      router.push(`/product/search/${search}`);
      setShowSidebar(false);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`border-2 border-brown-dark rounded-md flex flex-row items-center pl-2 text-brown-dark`}
    >
      <input
        className="outline-none placeholder:text-brown-secondary text-brown-dark py-1 w-full"
        onChange={handleInput}
        onKeyUp={onKeyEnter}
        placeholder="Search..."
        value={search}
      />
      <GrClose
        className="mx-2 text-brown-dark cursor-pointer"
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
      />
    </div>
  );
}
