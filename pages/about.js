import Head from "next/head";
import React from "react";
import { CardBio, Story } from "../components";

export default function About() {
  const teams = [
    {
      image: "/hawa.png",
      name: "Haqila",
      desc: "Seorang mahasiswa Informatika di Telkom University. Saat ini fokus mempelajari teknologi web dan mobile.",
    },
    {
      image: "/wahyu.jpg",
      name: "Wahyu",
      desc: "Seorang Front-End Developer. Saat ini fokus mengembangkan website di PukulEnam untuk berbagai klien.",
    },
  ];

  return (
    <>
    <Head>
      <title>About Us - HaWa & co.</title>
    </Head>
      <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-20">
        <h2 className="text-4xl font-Lora font-extrabold">About</h2>
        <h3>Our Story</h3>
        <Story />
        <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-10">
          <h2 className="text-4xl font-Lora font-extrabold">Team</h2>
          <p>Descriptions</p>
          <div className="flex flex-col lg:flex-row gap-6 rounded-lg px-6 lg:px-10 py-8 my-6">
            {teams.map((team) => (
              <CardBio key={team.name} team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
