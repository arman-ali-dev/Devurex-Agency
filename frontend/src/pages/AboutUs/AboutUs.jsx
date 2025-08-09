import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/AboutUs/ProjectCard";
import TestimonialCard from "../../components/AboutUs/TestimonialCard";
import BlogCard from "../../components/Blog/BlogCard";

import HeroSection from "../../components/AboutUs/HeroSection";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ExperienceSection from "../../components/AboutUs/ExperienceSection";
import FaqSection from "../../components/AboutUs/FaqSection";
import SkillSection from "../../components/AboutUs/SkillSection";
import ProjectSection from "../../components/AboutUs/ProjectSection";
import BlogSection from "../../components/AboutUs/BlogSection";

const AboutUs = () => {
  return (
    <>
      <HeroSection />

      <ExperienceSection />

      <FaqSection />

      <SkillSection />

      <section className="bg-black/50 bg-no-repeat bg-center py-22 mt-5 pl-5 pr-4">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Content */}
          <div className="col-span-2">
            <h2 className="text-[46px] font-semibold leading-[60px]">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-[17px] mt-3 text-gray-300 leading-relaxed">
              Whether you have a new idea or want to improve an existing
              project, I’m here to bring your vision to life with clean code,
              great design, and a smooth development process.
            </p>
          </div>

          {/* Right Button */}
          <div className="col-span-1 flex justify-end items-center">
            <Link className="effect-button px-6 py-[14px] rounded-full outline-none focus:outline-none hover:outline-none ring-0 focus:ring-0">
              <EastOutlinedIcon
                sx={{
                  fontSize: 19,
                  verticalAlign: "sub",
                  marginRight: 0.5,
                }}
              />
              <span className="font-semibold text-[18px] ml-0.5">
                Let’s Collaborate
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ProjectSection />

      <div className="my-20 bg-white/10 h-[1px] w-full "></div>

      {/* <section className=" pl-5 pr-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-[52px] font-semibold  border-[var(--primary-color)] border-l-[7px] pl-3">
              Testimonials
            </h1>
            <p className="text-[17px]">
              See how I've helped our clients succeed. IT’s a highly
              Customizable,creative, modern, visually stunning and Bootstrap5
              HTML5 Template.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-12 gap-7">
          {[1, 1, 1].map(() => (
            <TestimonialCard />
          ))}
        </div>
      </section> */}

      <BlogSection />
    </>
  );
};

export default AboutUs;
