import React from "react";
import SkillCard from "./SkillCard";
import { skillItems } from "../utils/skillitems";

const Skill = () => {
  return (
    <section>
      <div>
        <h2 className="headline-2 reveal-up">Tools I use</h2>
        <p className="text-zinc-500 mt-1 mb-4 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing apps/models
        </p>
        <div className="grid gap-3 grid-cols-2 sm:px-3">
          {skillItems.map((item, key) => (
            <SkillCard item={item} classes={" reveal-up"} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
