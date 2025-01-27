import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectItems } from "../utils/projectItems";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="work">
      <h2 className="headline-2 reveal-up">Pinned Projects</h2>
      <p className="text-zinc-500 ml-1 mt-1 mb-4 max-w-[70ch]">
        Those are some of my projects that i built, if you want to see more{" "}
        <a
          href="https://github.com/Abd-El-Rahmen?tab=repositories"
          className="underline text-sky-500"
          target="_blank"
        >
          click here
        </a>
      </p>
      <div className="grid sm:grid-cols-2 gap-3 px-1">
        {projectItems.map((item, index) => (
          <Link
            target="_blank"
            to={item.link}
            key={item.id}
            style={{
              opacity:
                hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
              transition: "opacity 0.3s",
            }}
            className="md:space-y-2 p-1 cursor-pointer flex gap-3 sm:block reveal-up"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.icon}
              className="rounded-md sm:h-fit h-20 object-cover opacity-80"
            />
            <div className="md:px-2">
              <h3 className="text-[0.8rem] sm:text-lg font-bold ">{item.title}</h3>
              <p className="text-zinc-400 text-xs md:text-md line-clamp-2">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
