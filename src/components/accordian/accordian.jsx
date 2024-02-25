/* eslint-disable react/prop-types */
import { useState } from "react";
import "./accordian.css";

const faqs = [
  {
    title: "Work Experience",
    text: "Work Experience Section",
    experience: [
      {
        designation: "Senior Software Engineer",
        company: "Wipro Tehnologies",
        logo: "src\\assets\\Wipro_Primary_Logo_Color_RGB.png",
        duration: "April 2022 - Present",
        companycolor: "border-pink-700",
        jobdescription:
          "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
      },
      {
        designation: "Front End Developer",
        company: "Increasingly Technologies",
        logo: "src\\assets\\increasingly-logo.png",
        duration: "Jan 2021 - April 2022",
        companycolor: "border-green-700",
        jobdescription:
          "Increasingly is an AI powered cross selling platform. As the Front End developer, my core activities include :Designing the AI powered product's Bundle on the E-Commerce sites.Creating modular, responsive templates using modern CSS techniques and JavaScript libraries.Collaborating with designers to ensure designs were efficient and technically sound.Ensuring proper documentation and reports in all stages of product life cycles.",
      },
      {
        designation: "Associate UI Developer",
        company: "Jivox India Software Pvt Ltd.",
        logo: "src\\assets\\jivox-corporation-logo-vector.png",
        duration: "Dec 2018 - Dec 2020",
        companycolor: "border-purple-700",
        jobdescription:
          "Jivox is creative advertising technology leader. As the Associate UI Developer, my core activities included : Designing and Creating the new features for the Jivox platform using JavaScript , Ajax, HTML 5 , CSS3 , React and JSON Worked in creating the AI personalized Ad Creatives for one of their more reputed clients like Marriott Hotels, Nike and Mazda.",
      },
    ],
  },
];

export default function AccordianComponent() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="container sm:p-10">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.experience.map((exp) => (
            <div
              className={
                "grid sm:grid-cols-12 items-start border shadow-md p-5 my-4 rounded-md " +
                exp.companycolor
              }
              key={exp.company}
            >
              <div className="logo col-span-2 w-20">
                <img src={exp.logo} alt="Wipro Logo Image" />
              </div>
              <div className="col-span-10 ">
                <div className="flex justify-between my-4">
                  <div className="text-sm">
                    <h1 className="text-gray-700 font-bold ">
                      {exp.designation}
                    </h1>
                    <h5 className=" text-gray-400">{exp.company}</h5>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <h5>{exp.duration}</h5>
                    <h5>Bangalore, Karnataka</h5>
                  </div>
                </div>
                <p className="my-4 text-gray-600">{exp.jobdescription}</p>
              </div>
            </div>
          ))}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""} rounded-md`}
      onClick={handleToggle}
    >
      <p className="number">{""}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="content-box border shadow-md p-5 rounded-md">
          {children}
        </div>
      )}
    </div>
  );
}
