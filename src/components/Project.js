import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project.css";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          watering,
          link,
          mainImage{
            asset->{
                _id,
                url
            }
        },
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <main className="bg-gradient-to-r from-green-600 to-slate-800 min-h-screen p-6">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Plants in the Garden
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Click on the photo below to see an example garden project/design
          containing this plant.
        </h2>
        <section className="Project">
          <Slider {...settings}>
            {projectData &&
              projectData.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-8">
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-green-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-600 text-xs space-x-4">
                    <ul>
                      <li>
                        <strong className="font-bold">in my garden from</strong>
                        : {new Date(project.date).toLocaleDateString()}
                      </li>

                      <li>
                        <strong className="font-bold">place</strong>:{" "}
                        {project.place}
                      </li>

                      <li>
                        <strong className="font-bold">watering</strong>:{" "}
                        {project.watering}
                      </li>
                      <li>
                        <strong className="font-bold">tags</strong>:{" "}
                        {project.tags.join(", ")}
                      </li>
                      <li>
                        <details>
                          <summary className="text-green-300 font-bold cursive hover:underline hover:text-blue-800 text-xl">
                            description
                          </summary>
                          <p className="my-6 text-base text-blue-800 leading-relaxed">
                            {project.description}
                          </p>
                        </details>
                      </li>
                      <li>
                        <a
                          href={project.link}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-green-500 font-bold hover:text-purple-700 text-base"
                        >
                          Click the photo for more!
                          <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
                            <img
                              src={project.mainImage.asset.url}
                              alt={project.mainImage.alt}
                              className="w-full h-full rounded-r object-cover absolute"
                            />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              ))}
          </Slider>
        </section>
      </section>
    </main>
  );
}
