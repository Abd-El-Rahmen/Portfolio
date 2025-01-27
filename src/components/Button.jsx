import React from "react";
import PropTypes from "prop-types";
const ButtonPrimary = ({ href, target = "self", label, icon, classes,download = false }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes} download={download}>
        {label}{icon}
      </a>
    );
  } else {
    return <button className={"btn btn-primary " + classes}>{label } { icon} </button>;
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};


const ButtonOutline = ({ href, target = "self", label, icon, classes }) => {
    if (href) {
      return (
        <a href={href} target={target} className={"btn btn-outline " + classes}>
          {label} { icon}
        </a>
      );
    } else {
      return <button className={"btn btn-outline " + classes}>{label } { icon} </button>;
    }
  };
  
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };

export { ButtonPrimary,ButtonOutline };
