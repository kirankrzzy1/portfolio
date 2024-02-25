import { Link, Outlet } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiAppWindowFill } from "react-icons/pi";
import { useState } from "react";

const Projects = () => {
  const [isProjectSelected, setProject] = useState(false);
  return (
    <div className="container">
      <Link
        to=""
        className={`${
          !isProjectSelected && "hidden"
        } absolute right-2 sm:right-10 z-10`}
        onClick={() => setProject((prev) => !prev)}
      >
        <IoMdCloseCircleOutline
          style={{ color: "#E34F26" }}
          className="sm:text-5xl text-5xl"
        />
        <p className="text-white">Close</p>
      </Link>
      {console.log(isProjectSelected)}
      {isProjectSelected == true ? (
        <Outlet />
      ) : (
        <>
          <div className="grid sm:grid-cols-2 m-10">
            <div>
              <img
                src="src\assets\undraw_version_control_re_mg66.svg"
                alt="Coding Image"
                title="Coding"
              />
            </div>
            <div className="p-10 text-center">
              <h1 className="text-2xl text-center  text-gray-700 font-bold md:text-3xl sm:my-7">
                Projects
              </h1>
              <p className="text-lg text-center  text-gray-400 font-bold md:text-lg sm:my-7">
                My projects makes use of vast variety of latest technology
                tools. My best experience is to create Data Science projects and
                deploy them to web applications using cloud infrastructure.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 m-10 ">
            <Link
              className="border-gray-100 border shadow-md p-10 rounded-md bg-red-50 font-semibold"
              to="currencyconvertor"
              onClick={() => setProject((prev) => !prev)}
            >
              <div className="flex">
                <PiAppWindowFill
                  style={{ color: "#E34F26" }}
                  className="sm:text-5xl text-5xl"
                />
                <p className="p-3">CurrencyConvertor</p>
              </div>
              <p className="text-gray-400">
                🔥 Employed for real-time currency conversion.
              </p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
