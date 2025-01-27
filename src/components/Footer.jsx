import React from "react";
import { connectItems } from "../utils/connectItems";
import { ButtonPrimary } from "./Button";
import { ChevronRight } from "lucide-react";

const navItems = [
  {
    label: "Home",
    link: "#home",
    className: "nav-link active",
  },
  {
    label: "About",
    link: "#about",
    className: "nav-link",
  },
  {
    label: "Work",
    link: "#work",
    className: "nav-link",
  },
  {
    label: "Connect",
    link: "#connect",
    className: "nav-link",
  },
  {
    label: "Contact",
    link: "#contact",
    className: "nav-link md:hidden",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="p-4 md:px-[15%]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let's work together today!</h2>

            <ButtonPrimary
              href={"mailto:bbng1778@gamil.com"}
              label="Start Project"
              icon={<ChevronRight />}
              classes={" reveal-up"}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:pt-20">
            <div className="">
              <p className="mb-2">Sitemap</p>
              <ul>
                {navItems.map(({ label, link }, key) => (
                  <li key={key} className="reveal-up">
                    <a className="litem" href={link}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className="mb-2">Socials</p>
              <ul>
                {connectItems.map(({ name, link, logo }, key) => (
                  <li key={key} className="reveal-up">
                    <a className="litem" href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-4">
          <a href="" className="">
            <div className="p-1 bg-white size-12 md:size-14 rounded-full flex items-center justify-center ">
              <img src="../../public/bng.png" alt="Abdou" />
            </div>
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">Abd EL Rahmen</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
