import ProjectIcon from "./assets/icons/ProjectIcon";
import Project from "./Project";

export default function Works() {
  return (
    <section>
      <div className=" dark:bg-gray-800 ">
        <div className="mx-4   py-4">
          <div className="flex flex-col gap-y-8">
            <h1 className=" flex flex-col gap-y-2 mx-auto">
              <span className="mx-auto">
                <ProjectIcon />
              </span>
              <span className="text-4xl font-bold pb-2 text-fuchsia-700 dark:text-blue-200">
                My previous works
              </span>
            </h1>
          </div>
          <div className=" mt-8 sm:mx-8 md:mx-12 lg:mx-30 xl:mx-56">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </section>
  );
}
