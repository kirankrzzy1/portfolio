import AccordianComponent from "../accordian/accordian";

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="src\assets\undraw_career_progress_ivdb.svg"
              alt="image"
              title="Self Growth"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-center  text-gray-700 font-bold md:text-3xl sm:my-7">
              Experience
            </h2>
            <p className="text-center p-3 text-lg text-gray-600 font-semibold">
              Innovative Front-End Developer with 5+ years experience in
              building and maintaining responsive websites in the recruiting
              industry. Proficient in HTML 5, CSS 3,JavaScript ES6 , React &
              Redux plus modern libraries & frameworks.
            </p>
          </div>
        </div>
      </div>
      <AccordianComponent />
    </div>
  );
};

export default Contact;
