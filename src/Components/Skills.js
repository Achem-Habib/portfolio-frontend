import CheckIcon from "./assets/icons/CheckIcon";
import ChipIcon from "./assets/icons/ChipIcon";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwindcss",
    "Javascript",
    "React",
    "Python",
    "Django",
    "Django Rest",
  ];
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        <h1 className="flex gap-x-1">
          <span className="mt-0.5">
            <ChipIcon />
          </span>
          <p className="text-slate-600 font-bold text-2xl ">My skill set</p>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex gap-x-2 bg-slate-200 px-2 py-2 rounded-md "
            >
              <span className="my-auto">
                <CheckIcon />
              </span>
              <span className="text-slate-800 text-lg font-semibold">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
