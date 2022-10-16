import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";
import { IoBagCheck } from "react-icons/io5";
import { useRouter } from "next/router";

export default function success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="bg-white min-h-[70vh] md:min-h-[60vh] mb-28 text-center">
      <div className="w-96 mt-24 p-10 h-96 md:h-full md:w-full m-auto md:mt-40 md:p-12 bg-[#dcdcdc] text-brown-primary rounded-2xl flex flex-col justify-center items-center">
        <IoBagCheck className="w-10 h-10" />
        <h1 className="text-2xl md:text-4xl font-Lora font-extrabold mt-4">
          Terima kasih atas pembelian anda!
        </h1>
        <p className="mt-2 text-lg font-semibold">
          Periksa email anda untuk melihat detail pesanan anda.
        </p>
        <p className="mt-6 font-semibold">
          Jika anda memiliki pertanyaan, silahkan hubungi kami di{" "}
          <span className="text-brown-dark">hawa@mail.co</span>
        </p>
        <div className="flex justify-center w-64 md:w-[45rem] md:mt-12">
          <button
            className="bg-brown-dark text-brown-light text-xl rounded-lg w-full py-3 mt-6 hover:scale-110 transition-all"
            onClick={() => router.replace("/")}
          >
            Lanjutkan Belanja
          </button>
        </div>
      </div>
    </div>
  );
}
