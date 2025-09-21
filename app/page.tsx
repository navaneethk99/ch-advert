"use server";
import React from "react";

const Page = () => {
  const skins = [
    { src: "/fortnite/bCZk2B.png", name: "Raven" },
    { src: "/fortnite/bg.jpg", name: "Skull Trooper" },
    {
      src: "/fortnite/renegade-raider-fortnite-with-pickaxe-b4fkaac8lpr4xbz1.jpg",
      name: "Renegade Raider",
    },
    {
      src: "/fortnite/FNECO_32-00_VbuckStoreArtUpdate_2800_EGS_1200x1600_1200x1600-380718e8fb23306b6e8a801d27880104.jpeg",
      name: "Get V-Bucks",
    },
  ];

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <img
        src="/fortnite/fx88qqgw90d41.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="Background"
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h1 className="custom-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 leading-tight">
          click here to get free fortnite skins (not clickbait)
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1500px]">
          {skins.map((skin, i) => (
            <a
              href="https://gravitas.vit.ac.in/events/3df08aa2-22c9-42ff-8640-de501218780f"
              target="_blank"
              key={i}
              rel="noopener noreferrer"
            >
              <div
                key={i}
                className="relative group cursor-pointer rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl w-full"
              >
                <div className="w-full aspect-[3/4]">
                  <img
                    src={skin.src}
                    alt={skin.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition duration-300">
                  <span className="text-white custom-font text-3xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                    {skin.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
