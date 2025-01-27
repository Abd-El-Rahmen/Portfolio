import React, { useState } from "react";
import { connectItems } from "../utils/connectItems";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Connect = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section id="connect">
      <h2 className="headline-2">Connect</h2>
      <p className="text-zinc-500 ml-1 mt-1 mb-4 max-w-[50ch]">
        You can check my social accounts and connect with me 
      </p>
      <div className="grid md:grid-cols-2 gap-3 px-1 md:max-w-[70%]">
        {connectItems.map((item, index) => (
          <Link
            target="_blank"
            to={item.link}
            key={item.id}
            style={{
              opacity:
                hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
              transition: "opacity 0.3s",
            }}
            className="flex justify-between p-3 md:max-w-60 rounded-xl bg-zinc-800/50 reveal-up"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex gap-2 items-center">
              <span className={`text-xl transition-colors  ${index === hoveredIndex && "text-sky-500"}`}>{item.logo}</span>
              <span className="text-lg">{item.name}</span>
            </div>
            <ArrowUpRight size={30} className=""/>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Connect;
