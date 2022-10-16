import React from "react";
import myImg from "../images/my_pic1.jpg";

export default function Home({ darkSide }) {
  return (
    <div className="bg-emerald-300 dark:bg-gray-800 w-screen">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center gap-y-8 md:justify-around md:gap-x-8">
        <div className="max-w-md md:w-3/5 w-5/6 pt-12">
          <img
            className="object-cover object-center  rounded-full bg-lime-300"
            src={myImg}
            alt="mine pic"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <div>
            <h1 className="title-font sm:text-4xl text-3xl  font-semibold text-indigo-700 dark:text-white text-center">
              Hi, I'm Achem Habib.
            </h1>

            <p className=" sm:text-4xl text-lg mb-4 font-medium text-cyan-700 dark:text-white text-center">
              And I'm a full stack web developer.
            </p>
          </div>
          <div className="flex gap-x-4 mx-auto">
            <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-900 text-lg font-medium border border-indigo-400 rounded-md text-white ">
              Resume
            </button>
            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 text-lg font-medium border border-purple-500 rounded-md text-white ">
              Work with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
