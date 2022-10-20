import React from "react";

export default function About() {
  return (
    <section className="relative">
      <div className="bg-emerald-500 dark:bg-gray-800  py-8">
        <div className="mx-4 sm:mx-28 md:mx-40 lg:mx-60  py-4  dark:bg-gray-900 rounded-md">
          <div className="flex flex-col gap-y-8">
            <h1 className="mx-4 flex gap-x-4 ">
              <p className="text-4xl font-bold pb-2 text-blue-800 dark:text-blue-200">
                About Myself
              </p>
            </h1>
            <div className="mx-4">
              <p className="text-lg dark:text-white font-medium ">
                I’m a Full Stack Developer located in Bangladesh. I have a
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences. Well-organised person,
                problem solver, independent employee with high attention to
                detail. Fan of MMA, outdoor activities, TV series and English
                literature. Interested in the entire frontend spectrum and
                working on ambitious projects with positive people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-top-1666266463">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-emerald-300"
          ></path>
        </svg>
      </div>
    </section>
  );
}
