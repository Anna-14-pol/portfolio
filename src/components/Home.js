import React from "react";
import image from "../book.gif";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Garden"
        className="absolute rounded-br-full rounded-tr-full md:rounded-r-none object-scale-down sm:object-cover w-fit md:w-full h-full bg-gradient-to-r from-green-600 to-slate-800"
      />
      <section className="relative flex justify-center min-h-screen ml-4 pt:8 max-[600px]:pt-16  ">
        <h1 className="text-6xl text-purple-600 xl:text-purple-300 font-bold cursive leading-snug home-name">
          Hey,
        </h1>
        <h1 className="text-6xl text-purple-700 font-bold cursive leading-snug home-home ">
          Gardeners!
        </h1>
      </section>
    </main>
  );
}
