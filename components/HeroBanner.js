import Link from 'next/link';
import React from 'react'
import { urlFor } from '../lib/client';

export default function HeroBanner({ banners }) {
  return (
    <div className="h-[35rem] md:h-[30rem] bg-brown-secondary rounded-2xl relative w-full px-10 py-24">
      <p className="text-xl text-brown-dark">{banners.smallText}</p>
      <h3 className="text-6xl font-Lora text-brown-dark font-medium">
        {banners.midText}
      </h3>
      <h1 className="text-9xl font-Lora -ml-2 uppercase font-semibold text-brown-light">
        {banners.largeText1}
      </h1>
      <div className="absolute -top-[2%] -right-[6%] md:top-0 md:right-[20%] w-[70%] md:w-[30rem]">
        <img
          alt={banners.product}
          src={urlFor(banners.image)}
          width={1080}
          height={1080}
        />
      </div>
      <Link href={`/product/${banners.product}`}>
        <button className='bg-brown-dark hover:bg-brown-light px-5 py-2 rounded-xl text-brown-light hover:text-brown-dark text-lg mt-10 cursor-pointer'>{banners.buttonText}</button>
      </Link>
      <div className="absolute bottom-[5%] right-[10%] w-80 flex flex-col text-brown-dark">
        <h5 className='mb-3 font-semibold self-end'>Description</h5>
        <p className='font-thin text-brown-primary text-end'>{banners.desc}</p>
      </div>
    </div>
  );
}
