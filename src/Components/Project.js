import ImageCaousel from "./ImageCarousel";
export default function Project() {
  const skills = [
    "Tailwindcss",
    "React",
    "Django",
    "Django Rest",
    "Rest API",
    "Postgresql",
    "Heroku",
  ];
  return (
    <div className="flex">
      <div className=" flex flex-col gap-y-4 px-4 py-4 rounded-md ">
        <h1 className="flex gap-x-2 text-slate-900 text-4xl  font-bold">
          <span>1.</span>
          <span>Quiz App</span>
        </h1>
        <div className=" flex flex-col justify-between gap-y-3 md:flex-row-reverse md:gap-x-10 lg:gap-x-20 ">
          <div className="w-full">
            <ImageCaousel />
          </div>
          <div className="w-11/12 flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h3 className="flex gap-x-2">
                <span className="my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#075985"
                    className="w-6 h-6 fill-sky-800"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-xl text-slate-800 font-semibold">
                  Technologies used
                </span>
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-slate-800 text-center border border-slate-800 px-3 py-1 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-700 font-medium">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>

            <div className="flex gap-x-2 ">
              <button className="bg-blue-800 text-slate-100 font-semibold px-4 py-2 w-32">
                Live
              </button>
              <button className="bg-violet-800 text-slate-100 font-semibold px-4 py-2 w-32">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
