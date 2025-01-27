import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="">
      <div className="space-y-4">
        <h2 className="headline-2 ml-4 reveal-up">About</h2>
        <div className="bg-zinc-800/50 p-8 rounded-2xl md:p-12 space-y-10 md:space-y-0 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-md md:max-w-[60ch] ">
            &nbsp;&nbsp;I’m Abd El Rahmen Benmegal, a 21-year-old from
            Algeria. I’m currently pursuing a degree in Business Intelligence at{" "}
            <a
              href="https://www.univ-bba.dz/"
              target="_blank"
              className="text-sky-500 underline"
            >
              Mohammed El Bachir El Ibrahimi university
            </a>{" "}
            . <br />
            &nbsp;&nbsp;Over the past 3 years, I’ve developed a strong passion for coding,
            specializing in full-stack development and machine learning. I’m
            always eager to learn, grow, and enhance my technical skills as I
            strive to solve real-world problems and make a meaningful impact.
          </p>
          <div className="flex flex-wrap justify-between items-center ">
            <div className="flex items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key} className="max-w-20">
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
            <div className="p-1 bg-white size-12 md:size-14 rounded-full flex items-center justify-center ">
              <img src="../../public/bng.png" alt="Abdou" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
