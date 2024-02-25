export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="src\assets\graduation-monochromatic.svg"
              alt="image"
              title="Graduated"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-center  text-gray-700 font-bold md:text-3xl sm:my-7">
              Education
            </h2>
            <div className="sm:grid grid-cols-12 border-gray-100 border shadow-md p-10 rounded-md">
              <div className="col-span-2">
                <img src="src\assets\vtul.png" alt="" />
              </div>
              <div className="col-span-10" style={{ paddingLeft: "2rem" }}>
                <h1 className="text-gray-700 font-bold ">
                  Visvesvaraya Technological University Bangalore
                </h1>
                <h1 className="text-gray-700 font-bold text-sm">
                  B.Tech. in Information Technology - (2014-2017) <br />
                  <span className="text-xs text-gray-700 font-semibold">
                    GPA: 8.6/10.0
                  </span>
                </h1>
                <ul className="text-sm m-4">
                  <li className="m-2">
                    <p>
                      ⚡ I have studied basic software engineering subjects like
                      DS, Algorithms, DBMS, OS, CA, AI etc.
                    </p>
                  </li>
                  <li className="m-2">
                    <p>
                      ⚡ Thesis Project: Title: Enhancing Network Security
                      through Machine Learning Algorithms Description:
                      Researched and implemented machine learning models to
                      detect and prevent network intrusions. Developed a
                      prototype system that analyzed network traffic patterns
                      and applied anomaly detection techniques to identify
                      potential security threats.
                    </p>
                  </li>
                </ul>
                <button className="border border-gray-100 rounded-md p-2 shadow-md text-gray-700 font-semibold place-self-end">
                  <a href="https://vtu.ac.in/" target="_blank">
                    Visit Website
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
