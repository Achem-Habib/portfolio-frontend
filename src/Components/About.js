import React from "react";
import AboutIcon from "./assets/icons/AboutIcon";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="mx-4  md:mx-24 lg:mx-32 xl:mx-60  py-4  dark:bg-gray-900 rounded-md ">
      <div className="flex flex-col gap-y-8">
        <h1 className=" flex flex-col gap-y-2 mx-auto">
          <span className="mx-auto">
            <AboutIcon />
          </span>
          <span className="text-4xl font-bold pb-2 text-fuchsia-700 dark:text-blue-200">
            About Myself
          </span>
        </h1>
        <div className="">
          <p className="text-md text-slate-700 dark:text-white  ">
            I’m a Full Stack Developer located in Bangladesh. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences. Well-organised person, problem solver, independent
            employee with high attention to detail. Fan of MMA, outdoor
            activities, TV series and English literature. Interested in the
            entire frontend spectrum and working on ambitious projects with
            positive people.
          </p>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
}
