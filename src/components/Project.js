import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

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

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Plants in my Garden
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my fav plant selection!
        </h2>
        <section className="grid md:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <ul>
                    <li>
                      <strong className="font-bold">In my garden from</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </li>

                    <li>
                      <strong className="font-bold">Place</strong>:{" "}
                      {project.place}
                    </li>

                    <li>
                      <strong className="font-bold">Watering</strong>:{" "}
                      {project.watering}
                    </li>
                    <li>
                      <p className="my-6 text-lg text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </li>
                    <li>
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-green-500 font-bold hover:underline hover:text-red-200 text-xl"
                      >
                        More about this plant
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
        </section>
      </section>
    </main>
  );
}
