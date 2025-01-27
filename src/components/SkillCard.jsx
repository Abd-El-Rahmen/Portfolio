import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ item, classes }) => {
  return (
    <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors ${classes}`}>
      <div className="bg-zinc-700/50 rounded-lg overflow-hidden  flex items-center justify-center   group-hover:bg-zinc-900 transition-colors p-[6px]">
        <i class={item.icon + " text-xl md:text-4xl"}>{item.icon === "..." && item.icon}</i>
      </div>
      <div>
        <h3 className="text-sm md:text-lg">{item.label}</h3>
        <p className="text-zinc-400 text-xs md:text-sm">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    desc: PropTypes.string,
  }).isRequired,
  classes: PropTypes.string,
};

SkillCard.defaultProps = {
  classes: "",
};

export default SkillCard;
