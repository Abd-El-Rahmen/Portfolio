import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button";
import { ArrowDown, Download } from "lucide-react";
import AnimatedText from "./AnimatedText";
import profile from "../../public/images/profile/itsme.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36 flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center"
    >
      <div className="">
        <img
          src={profile}
          alt=""
          className="w-48 h-48 md:w-40 md:h-40 object-cover rounded-full"
        />
      </div>
      <div className="space-y-5">
        <div className="max-w-lg space-y-3">
          <AnimatedText text={"Salem, Oubaida here!"} className="headline-1" />
          <p className="text-md font-extralight text-zinc-50/50">
            A humble human being who loves building software apps, AI models,
            and working with data.
          </p>
        </div>

        <div className="flex gap-2">
          <ButtonPrimary
            label="Download CV"
            href="../../public/Documents/Resume.pdf"
            download={true}
            target="_blank"
            icon={<Download size={18} />}
          />
          <ButtonOutline
            target=""
            href="#about"
            label="Scroll down"
            icon={<ArrowDown size={18} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
