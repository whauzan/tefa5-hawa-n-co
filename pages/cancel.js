import { useRouter } from "next/router";
import React from "react";

export default function cancel() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-[70vh] md:min-h-[60vh] mb-28 text-center">
      <div className="w-96 mt-24 p-10 h-96 md:h-full md:w-full m-auto md:mt-40 md:p-12 bg-[#dcdcdc] text-brown-primary rounded-2xl flex flex-col justify-center items-center">
        <p className="mt-2 text-lg font-semibold">
          Lupa untuk menambahkan pesanan anda ke keranjang? Berbelanjalah lalu kembali lagi untuk membayar!
        </p>
        <div className="flex justify-center w-64 md:w-[35rem] mt-4">
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
