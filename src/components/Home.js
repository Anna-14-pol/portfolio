import React from "react";
import image from "../garden.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Garden"
        className="absolute rounded-br-full rounded-tr-full md:rounded-r-none object-scale-down sm:object-cover w-fit md:w-full h-full bg-gradient-to-r from-green-600 to-slate-800"
      />
      <section className="relative flex justify-center min-h-screen ml-4 pt-12 lg:pt-64 md:pl-32">
        <h1 className="text-6xl text-grey-700 sm:text-green-600 font-bold cursive leading-snug home-name">
          Hey, Gardeners!
        </h1>
      </section>
    </main>
  );
}
