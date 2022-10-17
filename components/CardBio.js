import Image from "next/image";
import React from "react";

export default function CardBio({ team }) {
  return (
    <div className="flex flex-row gap-x-6 w-[35rem] max-w-md rounded-lg text-brown-dark">
      <div className="flex flex-col justify-center items-center">
        <div className="w-20">
          <Image
            className="rounded-full"
            src={team.image}
            width={1080}
            height={1080}
          />
        </div>
        <div className="bg-brown-dark rounded-2xl py-0.5 px-5 mt-2">
          <h5 className="font-semibold font-Lora text-brown-light">{team.name}</h5>
        </div>
      </div>
      <div className="text-left">
        <p className="">{team.desc}</p>
      </div>
    </div>
  );
}
