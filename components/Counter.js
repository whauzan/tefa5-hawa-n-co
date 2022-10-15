import React from 'react'
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

export default function Counter({ quantity, increase, decrease }) {
  return (
    <p className="border border-brown-secondary py-1 px-6 flex items-center rounded-md gap-x-3">
      <span className="text-brown-dark cursor-pointer" onClick={decrease}>
        <AiOutlineMinus className="text-3xl" />
      </span>
      <span className="text-brown-primary mx-2 text-2xl">{quantity}</span>
      <span className="text-brown-dark cursor-pointer" onClick={increase}>
        <AiOutlinePlus className="text-3xl" />
      </span>
    </p>
  );
}
