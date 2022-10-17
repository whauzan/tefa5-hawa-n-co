import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import ShopingBag from "../public/shopping-bag.webp";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Counter from "./Counter";
import getStripe from "../lib/getStripe";
import toast from "react-hot-toast";

export default function Cart() {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    removeFromCart,
  } = useStateContext();

  const handleCheckOut = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className="bg-black bg-opacity-50 w-screen fixed top-0 right-0 z-30 transition-all"
      ref={cartRef}
    >
      <div className="bg-white w-screen md:w-[600px] h-screen float-right relative p-3 md:px-3 md:py-10">
        <button
          className="flex flex-row items-center gap-x-2 text-lg"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span>Keranjang Anda</span>
          <span className="text-brown-dark font-semibold">
            ({totalQuantities} item)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className="m-10 text-center flex flex-col items-center">
            <div>
              <img src={ShopingBag.src} alt={"Shopping Bag"} />
            </div>
            <h3 className="font-semibold text-lg">Keranjang Anda Kosong</h3>
            <Link href="/">
              <button
                className="bg-brown-dark text-brown-light text-xl rounded-lg w-10/12 py-3 mt-6 hover:scale-110 transition-all"
                onClick={() => setShowCart(false)}
              >
                Lanjutkan Belanja
              </button>
            </Link>
          </div>
        )}

        <div className="mt-3 md:mt-4 overflow-auto max-h-[70vh] px-3 py-5">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="flex gap-8 py-5 px-1 md:p-5" key={item._id}>
                <img
                  className="w-1/4 h-1/4 rounded-xl bg-brown-light"
                  src={urlFor(item?.image[0])}
                  alt={item?.name}
                />
                <div className="flex flex-col justify-between">
                  <div className="flex justify-between w-52 md:w-[350px] text-xl">
                    <h5 className="font-semibold">{item.name}</h5>
                    <h4 className="font-bold">
                      Rp.
                      {item.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))+/g, "$1.")}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <Counter
                      quantity={item.quantity}
                      increase={() => toggleCartItemQuantity(item._id, "inc")}
                      decrease={() => toggleCartItemQuantity(item._id, "dec")}
                    />
                    <button
                      className="text-brown-dark"
                      onClick={() => removeFromCart(item)}
                    >
                      <TiDeleteOutline className="text-3xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="p-8 md:px-16 md:py-4 absolute bottom-0 right-1 w-full">
            <div className="flex flex-row justify-between font-semibold text-2xl">
              <h3>Subtotal</h3>
              <h3>
                Rp.
                {totalPrice
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))+/g, "$1.")}
              </h3>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-brown-dark text-brown-light text-xl rounded-lg w-10/12 py-3 mt-6 hover:scale-110 transition-all"
                onClick={() => {
                  setShowCart(false);
                  handleCheckOut();
                }}
              >
                Bayar Dengan Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
