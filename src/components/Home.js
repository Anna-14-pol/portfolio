import React from "react";
import image from "../garden.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Garden"
        className="absolute object-cover w-full h-full bg-green-800"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 md:pl-32">
        <h1 className="text-6xl text-green-600 font-bold cursive leading-snug home-name">
          Hey, Gardeners!
        </h1>
      </section>
    </main>
  );
}
