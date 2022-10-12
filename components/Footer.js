import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import { BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  const footerLinks = [
    {
      title: "Layanan Pelanggan",
      links: [
        {
          name: "Hubungi Kami",
          link: "#",
        },
        {
          name: "Pertanyaan dan Jawaban",
          link: "#",
        },
        {
          name: "Edukasi Perhiasan",
          link: "#",
        },
      ],
    },
    {
      title: "Informasi",
      links: [
        {
          name: "Lokasi Toko",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
        {
          name: "Tentang Kami",
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-6 px-10 border-t-4 border-t-brown-dark">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-[1.5] flex flex-col justify-start mr-10">
          <div className="w-48">
            <Image src={logo.src} width={822} height={264} />
          </div>
          <p className="font-Lora font-normal text-dimBlack text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
            Luxury Diamond Jewellery, Accessories and Gifts - HaWa & co.
          </p>
        </div>
        <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-Lora font-medium text-[18px] leading-[27px] text-black">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimBlack hover:text-[#ed1c24] cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center border-t-2 border-t-brown-secondary">
        <p className="font-Lora font-normal text-center text-[18px] leading-[27px] text-brown-dark mt-6">
          Ⓒ 2022 HaWa. All Rights Reserved.
        </p>
        <div className="flex flex-row text-brown-dark gap-x-3 mt-3">
          <BsInstagram className="w-6 h-6" />
          <BsTwitter className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
