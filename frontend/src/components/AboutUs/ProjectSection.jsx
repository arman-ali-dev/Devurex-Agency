import React from "react";
import ProjectCard from "./ProjectCard";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <>
      <section className="pt-30 pl-5 pr-4">
        <div className="bg-gradient-to-br w-full from-[#1a1a1a] to-[#111] text-white rounded-xl p-6 shadow-lg flex relative">
          <div>
            <h3 className="text-[32px] font-semibold">Featured Projects</h3>
            <p className="text-[17px] mt-2 text-gray-300 leading-relaxed">
              A curated selection of my best work — blending creativity,
              performance, and clean design. Each project is built to solve real
              problems and deliver measurable results.
            </p>

            <div className="mt-10">
              <Link className="effect-button px-6 py-[10px] rounded-full outline-none focus:outline-none hover:outline-none ring-0 focus:ring-0">
                <EastOutlinedIcon
                  sx={{
                    fontSize: 19,
                    verticalAlign: "sub",
                    marginRight: 0.5,
                  }}
                />
                <span className="font-semibold text-[16px] ml-0.5">
                  Explore Projects
                </span>
              </Link>
            </div>
          </div>

          <div>
            <span className="w-[2px] h-full bg-[var(--border-color)]  inline-block"></span>
          </div>
          <div className="w-0 h-0 absolute right-[19px] bottom-5 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[var(--border-color)]  inline-block"></div>
        </div>

        <div className="grid grid-cols-2 mt-16 pr-4 gap-10">
          {[1, 1].map(() => (
            <ProjectCard />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
