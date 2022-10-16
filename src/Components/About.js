import React from "react";

export default function About() {
  return (
    <div className="bg-emerald-400 dark:bg-gray-800  py-8">
      <div className="mx-4 sm:mx-28 md:mx-40 lg:mx-60  py-4  dark:bg-gray-900 rounded-md">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-4xl font-bold mx-auto pb-2 text-blue-800 dark:text-blue-200 border-b-4 border-cyan-500">
            About Myself!
          </h1>
          <div className="mx-4">
            <p className="text-lg dark:text-white font-medium ">
              I’m a Full Stack Developer located in Bangladesh. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences. Well-organised person, problem solver,
              independent employee with high attention to detail. Fan of MMA,
              outdoor activities, TV series and English literature. Interested
              in the entire frontend spectrum and working on ambitious projects
              with positive people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
