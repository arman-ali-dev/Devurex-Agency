import React from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const Resume = () => {
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="font-semibold text-[32px]">Online Resume</h1>
          <button
            className="effect-button  mt-1 px-7 py-3 rounded-full"
            type="submit"
          >
            <PictureAsPdfOutlinedIcon
              sx={{ fontSize: 21, verticalAlign: "sub", marginRight: 0.5 }}
            />
            <span className="font-semibold text-[18px]">
              Download PDF Version
            </span>
          </button>
        </div>
      </section>

      <div className="my-14 bg-white/10 h-[1px] w-full "></div>

      <section className="bg-[var(--sidebar-color)] mr-4 ml-5 px-12 py-14 rounded-[30px]">
        <div className="text-center">
          <h2 className="text-[58px] m-0 text-[var(--primary-color)] font-semibold">
            Arman Ali
          </h2>
          <p className="text-[19px] font-medium -mt-3">
            Junior Software Engineer
          </p>
        </div>
        <div className="my-10 bg-white/10 h-[1px] w-full "></div>
        <div>
          <p className="text-[17px]">
            Passionate software developer with experience in React, Redux, and
            React Native for frontend development. Skilled in building scalable
            web and mobile applications with a strong focus on performance and
            user experience. On the backend, proficient in Node.js and Spring
            Boot for developing robust APIs and server-side applications. Always
            eager to learn new technologies and solve challenging problems
            efficiently.
          </p>
        </div>
        <div className="my-14">
          <h1 className="text-[30px] text-[var(--primary-color)] font-semibold  border-[var(--primary-color)] border-l-[5px] pl-3">
            Skills
          </h1>

          <div className="mt-8">
            <ul className=" space-y-5">
              {[
                {
                  label: "PROGRAMMING LANGUAGES",
                  value: "Java, JavaScript, C, C++",
                },
                {
                  label: "FRONTEND",
                  value: "React.js, React Redux, React Native, HTML, CSS",
                },
                { label: "BACKEND", value: "Spring Boot, Node.js, Express.js" },
                { label: "DATABASES", value: "MySQL, MongoDB" },
                { label: "TOOLS & OTHERS", value: "Git, Postman, REST API" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[250px_20px_1fr] gap-34 text-[17px] items-start"
                >
                  <span>{item.label}</span>
                  <span className="font-bold">:</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
