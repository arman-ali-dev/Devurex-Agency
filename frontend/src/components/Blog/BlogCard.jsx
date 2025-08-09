import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <Link className="col-span-1 mb-4 group overflow-hidden block rounded-lg">
        <div className="relative w-full ">
          <img
            className="w-full rounded-lg transition-transform duration-500 "
            src="https://portfolify-vue.netlify.app/assets/blog2-dk8u2j_c.png"
            alt=""
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[var(--primary-color)] opacity-0 group-hover:opacity-40 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-lg"></div>
        </div>

        <div className="mt-7 px-6 transition-colors duration-500 group-hover:text-[var(--primary-color)]">
          <p className="text-[17px] transition-colors duration-500">
            April 18, 2024 <span className="mx-2">/</span> Articles
          </p>

          <h2 className="text-[23px] mt-3 font-semibold leading-[30px] transition-colors duration-500">
            7 Great Web Development Languages to Learn this Year
          </h2>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
