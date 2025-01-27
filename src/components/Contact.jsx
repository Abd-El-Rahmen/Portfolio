import React from "react";
import { connectItems } from "../utils/connectItems";

const Contact = () => {
  return (
    <section id="contact">
      <div className="w-full">
        <h2 className="headline-2">Contact me for collaboration</h2>
        <p className="text-zinc-400 pl-3 mt-3 mb-8  ">
          Reach out today to discuss your project needs and start collaborating
          on something amazing!
        </p>
        <form action="https://getform.io/f/alllmkea" method="POST" className="pl-3">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="col-span-1">
                <label htmlFor="name" className="label reveal-up">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Enter Your Name"
                  className="text-field"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="email" className="label reveal-up">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="Enter Your Email"
                  className="text-field"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="message" className="label reveal-up">
                Message :{" "}
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message Here"
                className="text-field resize-y min-h-32 max-h-80 "
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
